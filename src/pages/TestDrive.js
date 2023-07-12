import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
display: flex;  
justify-content: center;
margin-top: 17vw;
`

export default function TestDrive() {
  return (
    <Container>
        <span>Test-Drive скоро</span>
    </Container>
  )
}
