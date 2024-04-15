import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Dashboard = () => {
 /*  const fetchCurrentUser = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_HOST}/auth/current-user`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        setUser(data.data);
        localStorage.setItem("role", data.data.role);
      } else {
        removeToken();
        removeUser();
        toast.error("Please Login!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.");
      // Handle error (e.g., show error message to user)
    }
  }; */
  useEffect(() => {
    document.title = "MERN AuthGuardian | Home";
  }, []);

  return (
    <div className="flex bg-gray-200 h-screen overflow-y-hidden w-full">
      <div className="fixed w-64">
        <Sidebar/>
      </div>
      <div className=" flex items-center justify-center ml-64 w-screen ">
        <Outlet />
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Dashboard;
