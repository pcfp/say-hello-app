import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import randomize from './Randomize.jsx';

const Wrapper = styled.div`
  font-family: 'Archivo Black', sans-serif;
  font-size: 4em;
  padding: 0 .4em;
  margin-bottom: .5em;
  width: 45%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  span:nth-child(2) {
    transition: all .2s ease-in-out
  }

  span:nth-child(2) :hover {
    color:green;
    transform: scale(1.1);
  }
`;

const Line = styled.span`
  padding-bottom: 0.1em;
  padding-right: 0.3em;
`;

const Language = styled.div`
  padding-bottom: 0.1em;
  padding-right: 0.2em;
  cursor: pointer;
  color: purple;
  /* border-bottom: 0.4rem solid purple; */
  a.left {
    position: relative;
  }
  a.left:before{
    content: "";
    position: absolute;
    width: 0;
    height: 0.4rem;
    bottom: 0;
    left: 0;
    background-color: purple;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  a.left:hover:before{
    visibility: visible;
    width: 100%;
  }
`;

function Title({selection, setId, setFlipped}) {
  return (
    <Wrapper>
      <Line> HOW </Line>
      <Line> TO </Line>
      <Line> SAY </Line>
      <Line> HELLO </Line>
      <Line> IN </Line>
      <Language onClick={()=> {setId(randomize()); setFlipped(false); }}><a className="left"> {selection.langname} </a></Language>
      <Line> ? </Line>
    </Wrapper>
  )
}

export default Title;