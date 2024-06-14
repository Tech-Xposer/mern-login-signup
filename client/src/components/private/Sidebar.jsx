
import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  LockKeyhole,
  LogOut,
  Moon,
  Users,
  Sun,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { getToken,  } from "../../utils/utils";
const Sidebar = () => {
  const navigate = useNavigate();

  const [mode, setMode] = useState(false);

  useEffect(() => {
    const currentMode = localStorage.getItem("mode");
    setMode(currentMode === "true");
  }, []);

  const handleDarkMode = () => {
    const newMode = !mode;
    localStorage.setItem("mode", newMode);
    setMode(newMode);
  };

  const handleLogout = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_HOST}/auth/logout`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
    const data = await response.json();
    if (data.success) {
      localStorage.clear();
      navigate("/");
    }
  };
  return (
    <div
      className={`flex flex-col h-screen w-full items-center  ${
        mode ? "bg-gray-900" : "bg-white text-black"
      } text-white rounded-r-lg`}
    >
      <h1
        className={`text-3xl flex justify-center pt-5 ${
          mode ? "text-white" : "text-black"
        }`}
      >
        AuthGuardian
      </h1>
      <ul
        className={`flex flex-col m-5 gap-5 ${
          mode ? "text-white" : "text-black"
        }`}
      >
        <NavLink
          className={({ isActive }) =>
            isActive
              ? ` ${
                  mode ? "bg-gray-200/30" : "bg-[#685BFE] text-white"
                } p-2 rounded-lg`
              : "p-2"
          }
          to={"/auth/dashboard"}
        >
          <li className="text-xl flex gap-2 items-center">
            <Home /> Home
          </li>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `text-white ${
                  mode ? "bg-gray-200/30" : "bg-[#685BFE]"
                } p-2 rounded-lg`
              : "p-2"
          }
          to={"/auth/profile"}
        >
          <li className="text-xl flex gap-2 items-center">
            <User />
            Profile
          </li>
        </NavLink>

        {localStorage.getItem("role") === "admin" && (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `text-white ${
                    mode ? "bg-gray-200/30" : "bg-[#685BFE]"
                  } p-2 rounded-lg`
                : "p-2"
            }
            to={"/auth/users"}
          >
            <li className="text-xl flex gap-2 items-center">
              <Users />
              Users
            </li>
          </NavLink>
        )}
        
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `text-white ${
                  mode ? "bg-gray-200/30" : "bg-[#685BFE]"
                } p-2 rounded-lg`
              : "p-2"
          }
          to={"/auth/change-password"}
        >
          <li className="text-xl flex gap-2 items-center">
            <LockKeyhole />
            Change Password
          </li>
        </NavLink>

        <li
          className="text-xl flex gap-2 items-center p-2 cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut />
          Logout
        </li>
        <li className="text-xl flex gap-2 items-center p-2">
          {mode ? <Moon /> : <Sun />}
          <p className="text-base">{mode ? "Dark" : "Light"} Mode</p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value="true"
              className="sr-only peer"
              onChange={handleDarkMode}
              checked = {mode}
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
