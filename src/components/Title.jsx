import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import randomize from './Randomize.jsx';

const Wrapper = styled.div`
  font-family: 'Archivo Black', sans-serif;
  font-size: 4em;
  padding: 0 .4em;
  margin-bottom: .5em;
  width: 45%;


  span:nth-child(2) { transition: all .2s ease-in-out }

  span:nth-child(2) :hover {
    color:green;
    transform: scale(1.1);
  }
`;

const Line = styled.span`
  padding-bottom: .2em;
`;

const Language = styled.span`
  padding-bottom: 0em;
  cursor: pointer;
  color: purple;
  border-bottom: 0.4rem solid purple;
`;

function Title({selection, setId}) {
  return (
    <Wrapper>
      <Line> HOW TO </Line>
      <Line> SAY </Line>
      <Line> HELLO </Line>
      <Line> IN </Line>
      <Language onClick={()=> {setId(randomize())}}> {selection.langname} </Language>
      <Line> ? </Line>
    </Wrapper>
  )
}

export default Title;