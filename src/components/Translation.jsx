import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useSound from 'use-sound';

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-left: 2em;
  background: #f5f5f5;
  width: 15em;
  height: 17em;
  padding: 2em;
  border: 2px solid rgba(0,0,0,0.12);
  box-shadow: 1px 6px 7px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span.wave {
    animation-name: wave-animation;
    animation-duration: 3s;
    animation-iteration-count: 1;
    transform-origin: 70% 70%;
    display: inline-block;
    font-size: 2em;
  }

  @keyframes wave-animation {
      0% { transform: rotate(  0.0deg); }
     10% { transform: rotate(-10.0deg); }
     20% { transform: rotate( 12.0deg); }
     30% { transform: rotate(-10.0deg); }
     40% { transform: rotate(  9.0deg); }
     50% { transform: rotate(  0.0deg); }
    100% { transform: rotate(  0.0deg); }
  }


`;

const Result = styled.div`
  font-color:black;
  display:flex;
  font-size: 1.5em;
`;

const Pronounciation = styled.div`
  font-color:black;
  padding-top: 0.8em;
`;

const Speaker = styled.div`
  font-color:black;
  display:flex;
`;

function Translation({selection}) {
  const soundUrl = '../audios/' + selection.id + '.mp3';

  const [play, { stop }] = useSound(soundUrl, { volume: 1 });

  const [click, setClick] = useState(false);

  return (
    <div>
      <Wrapper>
        <div>
        <Result> {selection.word} </Result>
        <Pronounciation> {selection.pronounciation === null ? '' : selection.pronounciation } </Pronounciation>
        </div>
        <div>
        <span className="wave" onClick={() => {
            if(!click){
              setClick(true);
              play();
              setTimeout(() => {setClick(false);}, 1000);
            }
          }}>👋</span>
      </div>
      </Wrapper>
    </div>
  )
}

export default Translation;