import React, {useEffect, useState} from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import axios, {url as videoLink} from "../api/axios.js";
import YTDInput from "../components/YTDInput/YTDInput.js";
import {YTDButton} from "../components/YTDInput/YTDButton.js";
const YTD = () => {
  const [vdoData, setVdoData] = useState({
    title: "",
    video: "",
    image: "",
    ready: false
  });
  const [url, setUrl] = useState("");
  const handleChange = async (e) => {
    console.log("ran");
    const link = e.target.value;
    setUrl(link);
  };
  useEffect(() => {
    try {
      const fetchData = async () => {
        if (url.search("youtube.com") >= 0 && url) {
          const options = {
            headers: {
              "Content-Type": "application/json"
            }
          };
          const data = {
            url
          };
          const res = await axios.post("/api/v1/video-info", data, options);
          if (res?.data) {
            const {image, title, file} = res.data.data;
            setVdoData({
              title,
              image,
              video: file,
              ready: true
            });
          } else {
            throw new Error("Request Failed");
          }
        }
      };
      fetchData();
    } catch (err) {
      console.error(err.message);
    }
  }, [url]);
  console.log(`${videoLink}${vdoData.video}`);
  return /* @__PURE__ */ React.createElement(YTDContainer, null, /* @__PURE__ */ React.createElement(YTDCard, null, /* @__PURE__ */ React.createElement(YTDInput, {
    handleChange
  }), vdoData.ready ? /* @__PURE__ */ React.createElement(VideoInfoContainer, null, /* @__PURE__ */ React.createElement(Heading, null, vdoData.title), /* @__PURE__ */ React.createElement(Video, {
    height: "300px",
    width: "500px",
    controls: true
  }, /* @__PURE__ */ React.createElement("source", {
    src: `${videoLink}${vdoData.video}`
  }))) : /* @__PURE__ */ React.createElement(VideoInfoContainer, null, /* @__PURE__ */ React.createElement(Heading, null, "YouTube Video Title".substring(0, 25) + "..."), /* @__PURE__ */ React.createElement(Image, {
    src: "https://images.unsplash.com/photo-1645812579474-f15ff2ea57f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    height: 300,
    width: 300
  })), /* @__PURE__ */ React.createElement(YTDButton, {
    link: `${videoLink}${vdoData.video}`
  })));
};
const YTDContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const YTDCard = styled.div`
  margin-top: 30px;
  padding: 30px;
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.1);
  width: 600px;
`;
const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;
const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 0.3px;
`;
const Image = styled.img`
  object-fit: cover;
`;
const Video = styled.video``;
export default YTD;
