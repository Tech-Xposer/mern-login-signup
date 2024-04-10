import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname.startsWith("/auth") ? null : <Navbar />}
      <Outlet />
    </>
  );
};

export default Layout;
