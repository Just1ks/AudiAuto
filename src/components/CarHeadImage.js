import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  position:relative;

  & img {
    width: 100%;
    height: auto;
  }
`

export default function CarHeadImage({image}) {
  return (
    <Container>
      <img src={image}/>
    </Container>
  )
}
