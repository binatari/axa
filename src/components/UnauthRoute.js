import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthProvider } from '../context/AuthProvider';

// import { isAuthenticated } from '../helpers';
const RouteUnauthenticated = ({ component: Component, path }) => {
const {state} = useAuthProvider()
  
  if (!state) {
    return null;
  }

  return <Route component={Component} path={path} />;
};

export default RouteUnauthenticated