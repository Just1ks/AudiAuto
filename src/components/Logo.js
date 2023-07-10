import React from 'react'
import logo from '../images/Audi-Logo.wine.svg';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const LogoElement = styled.img`
    display: block;
    height: 5vw;
`

export default function Logo() {
  return (
    <Link to='/'>
      <LogoElement src={logo}/>
    </Link>    
  )
}
