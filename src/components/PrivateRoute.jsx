import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLogin = localStorage.getItem("isLoggedIn");
  return isLogin ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
