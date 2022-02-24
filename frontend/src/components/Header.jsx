import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  margin: 0;
  padding: 12px;
  background-color: #000;
  color: #fff;
  font-family: sans-serif;
  font-size: 3em;
  text-align: center;
`;

export const Header = () => {
  return (
    <div>
      <H1>video to gif converter</H1>
    </div>
  );
};
