import React, { useState } from "react";
import Input from "../inputs/Input";
import { toast } from "react-toastify";
import {
  User,
  Key,
  AtSign,
  Phone,
  X,
  CircleUserRound,
  MapPinned,
  Map,
} from "lucide-react";
const AddUser = ({ onClose }) => {
  const [formData, setFormData] = useState({});
  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
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
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("mobile", mobile);
      formData.append("state", state);
      formData.append("city", city);
      formData.append("avatar", e.target.avatar.files[0]); 

      const response = await fetch(
        `${import.meta.env.VITE_SERVER_HOST}/user/signup`,
        {
          method: "POST",
          headers: {
            Authorization:`Bearer ${localStorage.getItem("token")}`
          },
          body: formData,
        }
      );
      
      const data = await response.json();
      if (data.success) {
        toast.success("Signup successful!");
        setShowAddUserComponent(false);
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("An error occurred during signup. Please try again later.");
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-violet-500 p-8 rounded-lg flex flex-col gap-3">
        <button
          className="place-self-end text-white"
          onClick={onClose}
        >
          <X />
        </button>
        <h1 className="text-3xl text-white place-self-center">
          Create New User
        </h1>
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
              />

              <div className="bg-white border-1 p-2 rounded-lg w-[300px] shadow-2xl transition-all duration-300 pl-3 focus:outline-none text-[#6C0DFF]">
                {formData.avatar ? formData.avatar : "Profile Picture"}
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
      </div>
    </div>
  );
};

export default AddUser;
