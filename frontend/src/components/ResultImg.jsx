import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 450px;
  height: auto;
  border: 4px solid #000;
  margin: 40px auto;
`;

export const ResultImg = ({ gif }) => {
  return <Img src={gif} />;
};
