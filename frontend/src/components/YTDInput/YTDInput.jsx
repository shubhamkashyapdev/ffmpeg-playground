import React from 'react';
import styled from 'styled-components';

const YTDInput = ({ handleChange }) => {
  return (
    <InputContainer>
      <Input
        placeholder="place your youtube video link here.."
        type="text"
        onChange={handleChange}
        onPaste={handleChange}
      />
    </InputContainer>
  );
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
