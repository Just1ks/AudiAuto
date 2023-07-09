import React from 'react'
import styled from 'styled-components';

const MenuElement = styled.nav`
  color: black;
  
  & ul{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & li{
    margin: 0.5em;

    &:hover{
      cursor: pointer;      
      text-decoration: underline;
    }
  }
`

export default function Menu() {
  return (
    <MenuElement>
        <ul>
          <li>О салоне</li>
          <li>audiCars account</li>
        </ul>
    </MenuElement>
  )
}
