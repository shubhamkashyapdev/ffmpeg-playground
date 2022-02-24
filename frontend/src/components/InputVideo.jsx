
import React from "react";
import styled from "styled-components";
  
const Video = styled.video`
  width: 40%;
  margin: 20px;
  border: 1px dashed #045ca3;
`;
  
export const InputVideo = ({ video }) => {
  return <Video controls width="250" src={URL.createObjectURL(video)} />;
};