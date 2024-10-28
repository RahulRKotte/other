import React from "react";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import AppHeader from "../components/shared/Header.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AppFooter from "../components/shared/Footer.jsx";

const Layout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function Route() {
  return (
    <div>
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default Route;
