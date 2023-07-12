import React from 'react'
import videoAudi from '../videos/banner.mp4';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';

const DescriptionContainer = styled.div`
  position:relative;

  & video{
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
        <video autoPlay muted src={videoAudi}/>
        <div style={contrastElement}></div>
        <DescriptionText>
            <p>Продвижение через технологии</p>
            <p style={descriptionStyle}>пр. Независимости 198, Минск</p>
            <Link to='/test-drive'>
              <Button Text={'Тест-драйв'}/>
            </Link>          
        </DescriptionText>
    </DescriptionContainer>
  )
}