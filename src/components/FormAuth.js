import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { styled } from 'styled-components'
import Button from './Button'

const Container = styled.div`
background-color: gray;
padding: 1vw;
border-radius: 1.5 vw;
`

const LoginForm = styled. form`
display: flex;
flex-direction: column;

& div {
  margin-bottom: 2vw;
}

& input {
  width: 25vw;
  height: 3vw;
  font-size: 1.2vw;
  padding: 0.5vw;
  border-radius: 0.5vw;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #0077ff;
  }
}
`

export default function FormAuth({ onLogin }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (username === '' && password === '') {
      
      localStorage.setItem('isLoggedIn', true);
      onLogin();
      setIsLoggedIn(true);
      alert('Вы успешно вошли!');
    } else {
      alert('Неправильный логин или пароль');
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
        <LoginForm onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='Логин' value={username}
                onChange={(event) => setUsername(event.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder='Пароль' value={password}
                onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <Button Text={'Войти'}/>
        </LoginForm>  
    </Container>      
  )
}
