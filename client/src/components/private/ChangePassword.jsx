import React, { useState } from "react";
import Input from "../inputs/Input";
import img from "../../assets/Computer-login-rafiki.png";
import { toast, ToastContainer } from "react-toastify";
import { getToken } from "../../utils/utils";
const ChangePassword = () => {
  const [userFormData, setUserFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userFormData);
    if(!userFormData.password){
      toast.error("Please enter old password");
      return
    }
    if(!userFormData.newPassword || !userFormData.confirmPassword){
      toast.error("Please enter new password and confirm password");
      return
    }
    if (userFormData.newPassword !== userFormData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const token = getToken()
    // Add your login logic here
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_HOST}/auth/change-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(userFormData),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          setUserFormData({password:"",newPassword:"",confirmPassword:""});
          toast.success("Password changed successfully");
        }

        if (!data.success) {
          toast.error(data.message);
        }

      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="flex flex-row justify-between ">
      <div className="w-[400px]">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col justify-center bg-gradient-to-r from-purple-500 to-violet-600  shadow-2xl rounded-2xl p-5 items-center">
        <h1 className="text-3xl text-white">Change Password</h1>
        <form
          action=""
          className="flex flex-col gap-4 mt-5 text items-center"
          onSubmit={handleSubmit}
        >
          <Input
            type="password"
            placeholder="Old Password"
            name="password"
            color="#6C0DFF"
            onChange={handleChange}
            value={userFormData.password}
          />
          <Input
            type="password"
            placeholder="New Password"
            name="newPassword"
            color="#6C0DFF"
            onChange={handleChange}
            value={userFormData.newPassword}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            color="#6C0DFF"
            onChange={handleChange}
            value={userFormData.confirmPassword}
          />
          <button
            type="submit"
            className="border-2 p-2 rounded-xl bg-white text-[#6C0DFF] px-4 shadow-2xl w-[100px] "
          >
            Change
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ChangePassword;
