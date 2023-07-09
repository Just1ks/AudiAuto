import React from 'react';
import styled from 'styled-components';

const CarContainer = styled.div`
  text-align: center;
  width: 15vw;
 
  & img{
    transition: transform 0.5s ease;
    width: 14vw;
  }
  
  & img:hover {
  transform: scale(1.1);
  }

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`

export default function CarElement({carId, name, image}) {
  return (
    <CarContainer key={carId}>
      <img src={image} alt={carId}/>
      <p>{name}</p>
    </CarContainer>
  )
}