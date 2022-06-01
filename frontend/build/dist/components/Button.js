import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
export const Button = ({convertToGif}) => {
  return /* @__PURE__ */ React.createElement(Btn, {
    onClick: convertToGif
  }, "Convert");
};
const Btn = styled.button`
  background-color: #000;
  align-self: center;
  max-width: 150px;
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
