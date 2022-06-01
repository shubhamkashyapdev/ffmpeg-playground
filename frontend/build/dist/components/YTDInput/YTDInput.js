import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
const YTDInput = ({handleChange}) => {
  return /* @__PURE__ */ React.createElement(InputContainer, null, /* @__PURE__ */ React.createElement(Input, {
    placeholder: "place your youtube video link here..",
    type: "text",
    onChange: handleChange,
    onPaste: handleChange
  }));
};
const InputContainer = styled.div`
  padding: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;
const Input = styled.input`
  padding: 10px;
  width: 450px;
  font-size: 14px;
  font-weight: bold;
  outline: 2px solid #000;
  transition: all 0.3s ease-in-out;
  text-align: center;
  border: none;
  :focus {
    outline: 3px solid #000;
    outline-offset: 3px;
  }
  ::placeholder {
    text-align: center;
  }
`;
export default YTDInput;
