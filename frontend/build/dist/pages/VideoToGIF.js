import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {createFFmpeg, fetchFile} from "../../_snowpack/pkg/@ffmpeg/ffmpeg.js";
import {Button} from "../components/Button.js";
import {InputFile} from "../components/InputFile.js";
import {Header} from "../components/Header.js";
import {ResultImg} from "../components/ResultImg.js";
import {InputVideo} from "../components/InputVideo.js";
import {Dbutton} from "../components/Dbutton.js";
import {download} from "../utils/downloadFile.js";
const ffmpeg = createFFmpeg({log: true});
let memory = new WebAssembly.Memory({
  initial: 10,
  maximum: 100,
  shared: true
});
function VideoToGIF() {
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
    ffmpeg.FS("writeFile", "video1.mp4", await fetchFile(video));
    await ffmpeg.run("-i", "video1.mp4", "-t", "4", "-ss", "3", "-vf", "fps=10", "-f", "gif", "out.gif");
    const data = ffmpeg.FS("readFile", "out.gif");
    const url = URL.createObjectURL(new Blob([data.buffer], {type: "image/gif"}));
    setGif(url);
  };
  return ready ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(AppContainer, null, /* @__PURE__ */ React.createElement(Section, null, /* @__PURE__ */ React.createElement("div", null, video && /* @__PURE__ */ React.createElement(InputVideo, {
    video
  })), /* @__PURE__ */ React.createElement(InputFile, {
    setVideo
  }), /* @__PURE__ */ React.createElement(Button, {
    convertToGif
  })), /* @__PURE__ */ React.createElement(Section, null, /* @__PURE__ */ React.createElement("div", null, gif && /* @__PURE__ */ React.createElement(ResultImg, {
    gif
  })), /* @__PURE__ */ React.createElement("div", null, gif && /* @__PURE__ */ React.createElement(Dbutton, {
    gif,
    download
  }))))) : /* @__PURE__ */ React.createElement("p", null, "Loading video to gif converter...");
}
const AppContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;
const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
export default VideoToGIF;
