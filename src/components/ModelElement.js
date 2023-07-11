import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ModelContainer = styled.div`
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

  & a{
    color: black;
    text-decoration: none;
  }
`

export default function ModelElement({model}) {
  return (
    <ModelContainer key={model.modelId}>
      <Link to={`/car/${model.name}/${model.id}`}>
        <img src={model.image} alt={model.modelId}/>
        <p>{model.name}</p>
      </Link>      
    </ModelContainer>
  )
}