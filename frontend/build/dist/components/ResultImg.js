import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
const Img = styled.img`
  width: 450px;
  height: auto;
  border: 4px solid #000;
  margin: 40px auto;
`;
export const ResultImg = ({gif}) => {
  return /* @__PURE__ */ React.createElement(Img, {
    src: gif
  });
};
