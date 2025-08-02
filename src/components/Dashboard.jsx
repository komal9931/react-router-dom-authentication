import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  // Simulated login state (replace with real auth logic)
  const [isLoggedIn, setIsLoggedIn] = useState(true); // assume logged in

  const handleLogout = () => {
    // setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/");
    // Add actual logout logic here, e.g. clearing tokens, redirecting, etc.
  };
  return (
    <>
      <div style={{ display: "flex", width: "100%", height: "100vh" }}>
        <div
          style={{
            width: "20%",
            height: "100vh",
            backgroundColor: "red",
            color: "white",
            padding: "1%",
          }}
        >
          <div>
            <h1>Dashboard</h1>
            <ul>
              <li>
                <NavLink to="/dashboard/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/student-list">Student List</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/faculty-list">Faculty List</NavLink>
              </li>
            </ul>
            {/* Conditionally show Login or Logout */}
            {/* {!isLoggedIn ? (
              <NavLink to="/">Login</NavLink>
            ) : (
              <>
                <button
                  onClick={handleLogout}
                  style={{ display: "block", marginTop: "10px" }}
                >
                  Logout
                </button>
              </>
            )}
            <NavLink to="/singup">create a new account</NavLink> */}
            {!isLoggedIn && (
              <>
                <NavLink to="/">Login</NavLink>
                <NavLink
                  to="/singup"
                  style={{ display: "block", marginTop: "10px" }}
                >
                  Create a new account
                </NavLink>
              </>
            )}

            {/* Show Logout if logged in */}
            {isLoggedIn && (
              <button
                onClick={handleLogout}
                style={{
                  display: "block",
                  marginTop: "10px",
                  background: "white",
                  color: "red",
                  padding: "5px 10px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
        <div
          style={{
            width: "80%",
            height: "100vh",
            backgroundColor: "green",
            color: "white",
            padding: "1%",
          }}
        >
          <h1>Dashboard</h1>
          <div
            style={{ width: "100%", height: "100vh", backgroundColor: "blue" }}
          >
            <p>
              <Outlet />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
