import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

// import { isAuthenticated } from '../helpers';
const isAuthenticated = true
const RouteUnauthenticated = ({ component: Component, path }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return <Route component={Component} path={path} />;
};

export default RouteUnauthenticated