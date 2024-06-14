import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/Mobile login-pana.png";

import Input from "./inputs/Input";
import {
  User,
  Key,
  AtSign,
  Phone,
  LogIn,
  CircleUserRound,
  MapPinned,
  Map,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getUser } from "../utils/utils";

const Signup = () => {
  const [imageName, setImageName] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (getUser()) {
      navigate("/auth/dashboard");
    }
  }, [navigate]);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, mobile, state, city } = formData;
    if (!name || !email || !password || !mobile || !city || !state) {
      toast.error("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email address");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (!/^\d{10}$/.test(mobile)) {
      toast.error("Invalid phone number");
      return;
    }

    try {
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("password", password);
      data.append("mobile", mobile);
      data.append("state", state);
      data.append("city", city);
      data.append("avatar", e.target.avatar.files[0]); // Append file to FormData

      console.log(data);

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_HOST}/user/signup`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: data,
        }
      );

      if (response.ok) {
        // Signup successful
        toast.success("Signup successful!");
      } else {
        // Signup failed
        const data = await response.json();
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      toast.error("An error occurred during signup. Please try again later.");
    }
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen sm:scale-75 xl:scale-95">
      <div className="flex justify-between rounded-2xl bg-white shadow-2xl items-center w-[900px] mt-10 max-h-fit ">
        <div className="w-[400px]">
          <img src={bg} alt="" />
        </div>
        <div className=" bg-[#6C0DFF] items-center justify-center flex flex-col w-[500px]  rounded-r-2xl h-full py-5">
          <h1 className="text-4xl mb-12 shadow-2xl text-white">Sign Up</h1>
          <form
            action=""
            className="flex flex-col justify-center items-center space-y-4 text-center"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="flex items-center ">
              <User color="#fff" className="mr-4" />
              <Input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleFormData}
              />
            </div>
            <div className="flex items-center ">
              <AtSign className="mr-4" color="#fff" />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleFormData}
              />
            </div>

            <div className="flex items-center ">
              <Key className="mr-4" color="#fff" />
              <Input
                onChange={handleFormData}
                type="password"
                placeholder="Password"
                color="#6C0DFF"
                name="password"
              />
            </div>

            <div className="flex items-center ">
              <Phone className="mr-4" color="#fff" />
              <Input
                type="text"
                maxLength={10}
                placeholder="Mobile Number"
                name="mobile"
                onChange={handleFormData}
              />
            </div>
            <div className="flex items-center ">
              <Map className="mr-4" color="#fff" />

              <Input
                onChange={handleFormData}
                type="text"
                placeholder="City"
                color="#6C0DFF"
                name="city"
              />
            </div>
            <div className="flex items-center ">
              <MapPinned className="mr-4" color="#fff" />
              <Input
                onChange={handleFormData}
                type="text"
                placeholder="State"
                color="#6C0DFF"
                name="state"
              />
            </div>

            <div className="flex items-center">
              <CircleUserRound className="mr-4" color="#fff" />
              <label htmlFor="avatar" className="cursor-pointer">
                <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  className="hidden"
                  name="avatar"
                  onChange={(e) => {
                    setImageName(e.target.files[0].name);
                  }}
                />

                <div className="bg-white border-1 p-2 rounded-lg w-[300px] shadow-2xl transition-all duration-300 pl-3 focus:outline-none text-[#6C0DFF]">
                  {imageName ? imageName : "Profile Picture"}
                </div>
              </label>
            </div>
            <button
              type="submit"
              className="border-2 p-2 rounded-xl bg-white text-[#6C0DFF] px-4 shadow-2xl w-[100px] "
            >
              Signup
            </button>
          </form>
          <NavLink to="/">
            <p className="text-white mt-4 items-center flex gap-1">
              Already have an account ? Login <LogIn />
            </p>
          </NavLink>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
