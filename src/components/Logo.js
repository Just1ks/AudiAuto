import React from 'react'
import logo from '../images/Audi-Logo.wine.svg';
import styled from 'styled-components'

const LogoElement = styled.img`
    display: block;
    height: 5vw;
`

export default function Logo() {
  return (
    <LogoElement src={logo}/>
  )
}
