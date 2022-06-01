import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {download} from "../../utils/downloadFile.js";
export const YTDButton = ({link}) => {
  return /* @__PURE__ */ React.createElement(ButtonContainer, null, /* @__PURE__ */ React.createElement(Button, {
    href: link,
    download: true,
    onClick: (e) => {
      e.preventDefault();
      download(e, "video.mp4");
    }
  }, "Download"));
};
const Button = styled.a`
  background-color: #000;
  max-width: 150px;
  align-self: center;
  color: #fff;
  border-radius: 18px;
  border: 1px solid #000;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  font-size: 1.2em;
  padding: 10px;
  min-width: 20%;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: #3f3f3f;
    color: #efefef;
  }
`;
const ButtonContainer = styled.div`
  display: grid;
  place-content: center;
`;
