import React, { useState, useEffect } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import { Button } from "./components/Button";
import { InputFile } from "./components/InputFile";
import { Header } from "./components/Header";
import { ResultImg } from "./components/ResultImg";
import { InputVideo } from "./components/InputVideo"
import { Dbutton } from "./components/Dbutton";
  
// Create the FFmpeg instance and load it
const ffmpeg = createFFmpeg({ log: true });
let memory = new WebAssembly.Memory({initial:10, maximum:100, shared:true});
  
function App() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();
  
  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };
  
  useEffect(() => {
    load();
  }, []);
  
  const convertToGif = async () => {
    // Write the .mp4 to the FFmpeg file system
    ffmpeg.FS("writeFile", "video1.mp4", await fetchFile(video));
      
    // Run the FFmpeg command-line tool, converting 
    // the .mp4 into .gif file
    await ffmpeg.run(
      "-i",
      "video1.mp4",
      "-t",
      "4",
      "-ss",
      "3",
      "-vf",
      "fps=10",
      "-f",
      "gif",
      "out.gif"
    );
    // Read the .gif file back from the FFmpeg file system
    const data = ffmpeg.FS("readFile", "out.gif");
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/gif" })
    );
    setGif(url);
  };
  
  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.gif");
          document.body.appendChild(link);
          link.click();
          // const link = () => <a href={url} download='image.gif' />
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  return ready ? (
    <div className="App">
      <Header />
      {video && <InputVideo video={video} />}
      <InputFile setVideo={setVideo} />
      <Button convertToGif={convertToGif} />
      <h1>Result</h1>
      {gif && <ResultImg gif={gif} />}
      {gif && <Dbutton gif={gif} download={download} />}
    </div>
  ) : (
      
<p>Loading...</p>
  
  );
}
  
export default App;