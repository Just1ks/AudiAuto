import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
text-align: center;
margin-top: 17vw;
color: red;
font-size: 8vw;
`

export default function NotFound() {
  return (
  <Container>
    <p> Ошибка 404</p>
    <p>Страница не найдена !</p>
  </Container>   
  )
}