import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS file for toast notifications
import Navbar from "../components/Navbar";

const MainLayOut = () => {
  return (
    <>
      <Navbar /> {/*  we want the navbar to show on every page */}
      <ToastContainer />
      <Outlet />
      
    </>
  );
};

export default MainLayOut;
