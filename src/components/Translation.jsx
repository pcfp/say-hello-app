import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import useSound from 'use-sound';

const Card = styled.div`
  perspective: 1000px;
  width: 17em;
  height: 19em;

  &.flipped {
    z-index:1;
  }

  font-family: 'Roboto', sans-serif;
  padding: 0em 1em 0em 3em;

  span {
    font-size: 1.8em;
    height: 1.2em;
    width: 1.2em;
    border-radius: 50%;
  }

  span:hover {
    background-color: #e6e6e6;
    cursor: pointer;
  }

  span.wave {
    animation-name: wave-animation;
    animation-duration: 3s;
    animation-iteration-count: 1;
    transform-origin: 70% 70%;
    display: inline-block;
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

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  transition: transform 500ms;
  transform-style: preserve-3d;
  transform-origin: center right;

  &.flipped {
    transform: translateX(-100%) rotateY(-180deg);
  }
`;

const CardSide = css`
  position:absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  --moz-backface-visibility: hidden;
  --webkit-backface-visibility: hidden;
  border: 2px solid rgba(0,0,0,0.12);
  box-shadow: 0 1px 1px rgba(0,0,0,0.12),
              0 2px 2px rgba(0,0,0,0.12),
              0 4px 4px rgba(0,0,0,0.12),
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
  background: #f5f5f5;
`;

const CardFront = styled.div`
  ${CardSide}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 0;
`;

const CardBack = styled.div`
  ${CardSide}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: rotateY(180deg);

`

const Result = styled.div`
  color:black;
  display:flex;
  font-size: 1.5em;
  padding-top: 1.5rem;
  padding-left: 1.5rem;
`;

const Pronounciation = styled.div`
  color:black;
  padding-top: 0.8rem;
  padding-left: 1.5rem;
`;

const BackContent = styled.div`
  font-family: 'Archivo Black', sans-serif;
  display: flex;
  flex-direction: column;
  font-size: 2em;
  padding: 1.5rem;
`;

const FrontControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem;
`;

const BackControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1.5rem;
`;


function Translation({selection, flipped, setFlipped}) {
  const soundUrl = '../audios/' + selection.id + '.mp3';
  const [play, { stop }] = useSound(soundUrl, { volume: 1 });
  const [click, setClick] = useState(false);

  return (
  <Card>
    <CardInner className={flipped ? 'flipped' : ''}>
      <CardFront>
        <div>
          <Result> {selection.word} </Result>
          <Pronounciation> {selection.pronounciation === null ? '' : selection.pronounciation } </Pronounciation>
        </div>
        <FrontControls>
          <span
            className={click === true ? 'wave' : ''}
            onClick={() => {
              if(!click){
                setClick(true);
                play();
                setTimeout(() => {setClick(false);}, 1000);
              }
              }}>
              👋
          </span>
          <span onClick={() => setFlipped(true)}> 👀 </span>
        </FrontControls>
      </CardFront>
      <CardBack>
        <BackContent>
          <div style={{ color: '#e63946'}}>Congrats! </div>
          <div style={{ color: '#161a1d'}}>
            You now can greet <b>{selection.speakers}</b> millions more people!
          </div>
        </BackContent>
        <BackControls onClick={() => setFlipped(false)}><span> 🔙 </span></BackControls>
      </CardBack>
    </CardInner>
  </Card>
  )
}

export default Translation;