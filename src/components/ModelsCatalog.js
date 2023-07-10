import React from 'react'
import { styled } from "styled-components";
import ModelElement from './ModelElement';
import {cars} from "../cars.data";

const Container = styled.div`
    text-align: center;
    margin: 2vw;
`

const Cars = styled.div`
    display: flex;
    flex-direction: row;        
    flex-wrap: wrap;
`

export default function ModelsCatalog({models}) {

    if (!models) {
        return;
    }
    
    return (
    <Container>
        <h2>Модели автомобиля:</h2>
        <Cars>
            {models.map(model => (
                <ModelElement model={model}/>
            ))}
        </Cars>
    </Container>   
  )
}