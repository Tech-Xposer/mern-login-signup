import React, { useEffect, useState } from "react";
import {
  getToken,
  removeToken,
  removeUser,
  setToken,
  setUser,
} from "../../utils/utils";
import { toast, ToastContainer } from "react-toastify";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {


  useEffect(() => {
    document.title = "MERN AuthGuardian | Home";
  }, []);

  // if (loading) {
  //   // Show loading indicator while fetching data
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex bg-gray-200">
      <div className="w-[300px]">
        <Sidebar />
      </div>
      <div className="w-full flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
