import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const HeaderElement = styled.header`
  background-color: rgba(255, 255, 255, 0.5);
  height: 5vw;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  & div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: 81.5vw;
    margin: 0 auto;
    padding: 0 20px;
  }
`

export default function Header() {
  return (
  <HeaderElement>
    <div>
      <Logo/>     
      <Menu/>
    </div>
  </HeaderElement>
  )
}
