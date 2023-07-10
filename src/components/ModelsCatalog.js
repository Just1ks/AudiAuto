import React, { useState } from 'react'
import { styled } from "styled-components";
import ModelElement from './ModelElement';
import {cars} from "../cars.data";

const Container = styled.div`
    display: inline-block;
    text-align: center;
    margin: 2vw;
    
    & span:hover{
        cursor: pointer;
        text-decoration: underline;
    }
`

const Cars = styled.div`
    display: flex;
    flex-direction: row;        
    flex-wrap: wrap;
`

export default function ModelsCatalog({models, onClose}) {
    const [isCatalogVisible, setIsCatalogVisible] = useState(true);

    if (!models || !isCatalogVisible) {
        return;
    }

    function handleClose() {
        setIsCatalogVisible(false);
        onClose && onClose();
    }
    
    return (
    <Container>
        <h2>Модели автомобиля</h2>
        <span onClick={handleClose}>Закрыть</span>
        <Cars>
            {models.map(model => (
                <ModelElement model={model}/>
            ))}
        </Cars>
    </Container>   
  )
}
