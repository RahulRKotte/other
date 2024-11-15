import React from "react";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import AppHeader from "../components/shared/Header.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AppFooter from "../components/shared/Footer.jsx";

const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '20px' }}>
          <Outlet /> {/* This will render the current page content */}
        </main>
      </div>
      <Footer />
    </div>
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
