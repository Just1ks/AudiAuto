import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return (
    isLoggedIn ? <Outlet /> : <Navigate to='/login'/>    
  );
}

export default PrivateRoute;