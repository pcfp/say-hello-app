import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;

  .menu-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5em;
  height: 5em;
  cursor: pointer;
  transition: all .5s ease-in-out;
  }
  .menu-btn__burger {
  width: 50px;
  height: 6px;
  background: black;
  border-radius: 5px;
  box-shadow: 0 2px 5px #80736e33;
  transition: all .5s ease-in-out;
  }
  .menu-btn__burger::before,
  .menu-btn__burger::after {
  content: '';
  position: absolute;
  width: 50px;
  height: 6px;
  background: black;
  border-radius: 5px;
  box-shadow: 0 2px 5px #80736e33;
  transition: all .5s ease-in-out;
  }
  .menu-btn__burger::before {
  transform: translateY(-16px);
  }
  .menu-btn__burger::after {
  transform: translateY(16px);
  }
  
  /* ANIMATION */
  .menu-btn.open .menu-btn__burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
  }
  .menu-btn.open .menu-btn__burger::before {
  transform: rotate(45deg) translate(35px, -35px);
  }
  .menu-btn.open .menu-btn__burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
  }
`;

function Hamberger({setMenuToggle, menuToggle}) {
  return (
    <Wrapper>
      <div className={menuToggle ? "menu-btn open": "menu-btn"} onClick={()=> setMenuToggle(!menuToggle)}>
        <div className="menu-btn__burger"></div>
      </div>
    </Wrapper>
  )
}

export default Hamberger;