import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Login from "./components/Login";
import Singup from "./components/Singup";
import Dashboard from "./components/Dashboard";
import Faculty_List from "./components/Faculty_List";
import Student_List from "./components/Student_List";
import Home from "./components/Home";
import CheckAuth from "./components/checkAuth";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/singup",
      element: <Singup />,
    },
    {
      path: "/dashboard",
      loader: CheckAuth,
      element: <Dashboard />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "student-list",
          element: <Student_List />,
        },
        {
          path: "faculty-list",
          element: <Faculty_List />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
