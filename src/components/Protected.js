import { Navigate } from "react-router-dom";
import React, { useContext, useState } from 'react'
const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;