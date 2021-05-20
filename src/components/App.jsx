import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Title from './Title.jsx';
import Translation from './Translation.jsx';
import Hamberger from './Hamberger.jsx';
import languageData from '../../data';
import Randomize from './Randomize.jsx';

const Container = styled.nav`
  width: 90%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  margin:auto;
`;

const Nav = styled.nav`
  padding: 3em 1em;
  align-self: flex-start;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0% 10% 10% 0%;
  font-size: 18px;
`
function App() {
  const [id, setId] = useState(Randomize());
  const [selection, setSelection] = useState(languageData[id - 1]);

  // useEffect(() => {
  //   setId();
  // }, []);

  useEffect(() => {
    setSelection(languageData[id - 1])
  }, [id]);

  return (
    <Container>
      <Nav>
        <Hamberger />
      </Nav>
      <Wrapper>
        <Title selection={selection} setId={setId}/>
        <Translation selection={selection}/>
      </Wrapper>
      {/* {
        languageData.forEach((lan) => {
          console.log(lan.langname)
        })
      } */}
    </Container>
  )
}

export default App;