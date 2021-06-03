import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: purple;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 1em;
  padding-bottom: 1em;
  color:white;
  display: flex;
  flex-direction: column;
  font-size: 3.5em;
  font-family: 'Archivo Black',sans-serif;
`;

const Lan = styled.div`
  padding-left: 1em;
  a.left
  {
    position: relative;
  }

  a.left:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0.4rem;
    bottom: 0;
    left: 0;
    background-color: #FFF;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
  a.left:hover:before {
    visibility: visible;
    width: 100%;
  }
`

function Sidenav({setMenuToggle, menuToggle, languageData, setId, setFlipped}) {
  return (
    <Container style={menuToggle === true ? {width: '53%'} : {width: '0'}}>
      {languageData.map((item)=> {
        return (<Lan onClick={()=>{setId(item.id); setMenuToggle(false); setFlipped(false);}}><a className="left">{item.langname}</a></Lan>);
      })}
    </Container>
  )
}

export default Sidenav;