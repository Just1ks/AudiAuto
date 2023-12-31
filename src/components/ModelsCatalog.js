import React, { useState } from 'react'
import { styled } from "styled-components";
import ModelElement from './ModelElement';
import closeIcon from '../images/close-icon.png';

const Container = styled.div`
    display: inline-block;
    text-align: center;
    margin: 4vw;
    
    & span:hover{
        cursor: pointer;
    }
    
`

const Cars = styled.div`
    display: flex;
    flex-direction: row;        
    flex-wrap: wrap;
`

const Icon = styled.img`
    width: 2.5vw;
    margin-top:1.1vw;
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
        <span onClick={handleClose} >
            <Icon src={closeIcon}/>
        </span>       
        <Cars>
            {models.map(model => (
                <ModelElement model={model}/>
            ))}
        </Cars>
    </Container>   
  )
}
