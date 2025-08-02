import React from "react";
import Login from "./Login";
import { redirect } from "react-router-dom";

const CheckAuth = () => {
  const isLogin = localStorage.getItem("isLoggedIn");

  if (!isLogin) {
    return redirect("/");
  } else {
    return null;
  }
};

export default CheckAuth;
