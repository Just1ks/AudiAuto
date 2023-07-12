import React from 'react'
import { styled } from 'styled-components'
import FormAuth from '../components/FormAuth'

const Container = styled.div`
  display: flex;  
  justify-content: center;
  margin-top: 17vw;
`

export default function Auth({ onLogin }) {
  return (
    <Container>
      <FormAuth onLogin={onLogin}/>
    </Container>
  )
}
