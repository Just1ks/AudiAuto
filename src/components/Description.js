import React from 'react'
import imageAudi from '../images/A8-main.jpg'
import styled from 'styled-components'
import Button from './Button'

const DescriptionContainer = styled.div`
  position:relative;

  & img{
    width: 100%;
    height: auto;
  }  
`

const DescriptionText = styled.div`
  color: white;
  position: absolute;
  top: 17vw;
  left: 22vw;
  transform: translate(-50%, -50%);
  z-index: 1;
  max-width: 40%;

  & p {
    font-size: 1.50vw;
    min-font-size: 15px;
  }
`

const descriptionStyle = {
  fontSize: '1.05vw',
  fontWeight: '200'
};

const contrastElement = {
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'absolute',
  left:'0',
  top:'0',
  backgroundColor: 'rgba(0, 0, 0, 0.3)'
};

export default function Description() {
  return (
    <DescriptionContainer>
        <img src={imageAudi} alt='Ауди А8'/>
        <div style={contrastElement}></div>
        <DescriptionText>
            <p>Продвижение через технологии</p>
            <p style={descriptionStyle}>пр. Независимости 198, Минск</p>
            <Button Text={'Тест-драйв'}/>
        </DescriptionText>
    </DescriptionContainer>
  )
}