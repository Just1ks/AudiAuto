import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import styled from 'styled-components';

const FooterElement = styled.footer`
  background-color: #f0f0f0;
  padding: 2vw;
  vertical-align: bottom;
  
  & p{
    font-size: 0.8vw;    
    max-width: 30em;
  }
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 81.5vw;
  margin: 0 auto;
  padding: 0 20px;
`

const FooterText = styled.span`
  font-size: 0.8vw;
  margin: 1vw auto;
  display: block;
  text-align: center;  
`
const SocialNetwork = styled.div`
  text-align: center;

  & a{
    font-size: 0.8vw;
    margin: 0.2vw;
  }
`

export default function footer() {
  return (
    <FooterElement>
      <FooterContainer>
        <Logo/>
        <p>Audi of America takes efforts to ensure the accuracy of information on the general vehicle information pages. Models are shown for illustration purposes only and may include features that are not available on the US model. As errors may occur or availability may change, please see dealer for complete details and current model specifications.</p>
        <SocialNetwork>
          <p>Наши соцсети</p>
          <a href='#'>Facebook</a>
          <a href='#'>Instagram</a>
          <a href='#'>VK</a>
        </SocialNetwork>
        <Menu/>
      </FooterContainer>
      <FooterText>
          &copy; {new Date().getFullYear()} Audi. Все права защищены.
      </FooterText> 
    </FooterElement>
  )
}
