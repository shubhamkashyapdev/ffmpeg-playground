import React from "react";
import styled from "styled-components";
  
const Section = styled.div`
  display: flex;
  left: 0;
  right: 0;
  margin: 50px auto;
  width: 30%;
  border: 2px dashed #000;
  border-radius: 18px;
  padding: 10px;
`;
  
export const InputFile = ({ setVideo }) => {
  return (
    <Section>
      <input type="file" onChange={(e) => setVideo(e.target.files?.item(0))} />
    </Section>
  );
};