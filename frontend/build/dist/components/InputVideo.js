import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
const Video = styled.video`
  width: 40%;
  margin: 20px;
  border: 1px dashed #045ca3;
`;
export const InputVideo = ({video}) => {
  return /* @__PURE__ */ React.createElement(Video, {
    controls: true,
    width: "250",
    src: URL.createObjectURL(video)
  });
};
