import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = localStorage.getItem("isLoggedIn");
    if (isLogin) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const login_handler = () => {
    localStorage.setItem("isLoggedIn", true);
    navigate("/dashboard");
  };

  return (
    <>
      <div>
        <h1>Make Login pages</h1>
        <button onClick={login_handler}>Login</button>
        {/* <button onClick={() => navigate("/singup")}>create a account</button> */}
      </div>
    </>
  );
};

export default Login;
