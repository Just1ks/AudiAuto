import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { styled } from 'styled-components'
import Button from '../components/Button'

const Container = styled.div`
display: flex;  
justify-content: center;
margin-top: 17vw;

& div{
  text-align: center;
}
`

export default function Profile({ onLogout }) {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', false);
    onLogout(false);
    setIsLoggedOut(true);
  };

  if (isLoggedOut) {
    return <Navigate to="/login" />;
  }

  return (
    <Container>
      <div>
        <span>Профиль</span>
        <Button Text={"Выйти"} Click={handleLogout}/>
      </div>      
    </Container>
  )
}