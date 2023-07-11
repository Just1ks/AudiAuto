import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`

& h1{
    text-align: center;
    margin: 4vw;
}

& div{
    display: flex;
}

& img{
    width:50%;
}

& p{
    margin: 8vw;
}
`

export default function CarImage({image, head, paragraph}) {
  return (
    <Container>
        <h1>{head}</h1>
        <div>
            <img src={image}/>
            <p>{paragraph}</p>
        </div>        
    </Container>    
  )
}
