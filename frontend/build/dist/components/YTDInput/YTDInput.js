import React from "../../../_snowpack/pkg/react.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
import {FaDownload} from "../../../_snowpack/pkg/react-icons/fa.js";
const YTDInput = ({handleChange}) => {
  return /* @__PURE__ */ React.createElement(InputContainer, null, /* @__PURE__ */ React.createElement(Input, {
    placeholder: "place your youtube video link here..",
    type: "text",
    onChange: handleChange,
    onPaste: handleChange
  }), /* @__PURE__ */ React.createElement(ButtonContainer, null, /* @__PURE__ */ React.createElement(FaDownload, {
    color: "white"
  }), /* @__PURE__ */ React.createElement(ButtonText, null, "Start")));
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
const ButtonContainer = styled.div`
  background-color: #000;
  display: flex;
  gap: 5px;
  width: 80px;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #000;
`;
const ButtonText = styled.p`
  color: #fff;
  font-size: 20px;
`;
export default YTDInput;
