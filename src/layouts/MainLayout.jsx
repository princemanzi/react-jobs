import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayOut = () => {
  return (
    <>
     <Navbar />  {/*  we want the navbar to show on every page */}
      <Outlet />
    </>
  );
};

export default MainLayOut;
