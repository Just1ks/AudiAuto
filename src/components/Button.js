import React from 'react'
import styled from 'styled-components'

const ButtonElement = styled.button`
    font-size: 1.1vw;
    padding: 0.7vw;
    margin-top: 5px;
    border-radius: 20px;
    border: 0;
    width: auto;
    transition: background-color 0.5s ease;

    &:hover{
        background-color: #b0aeae;
        cursor: pointer;
    }
`

const Button = ({ Text }) => {
    return (
      <ButtonElement>{Text}</ButtonElement>
    );
  }
  
  export default Button;
