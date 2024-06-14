import React, { useState } from "react";
import Input from "./inputs/Input";
import { toast } from "react-toastify";
import { UserRoundSearch, X } from "lucide-react";
import bg from "../assets/hacker.svg";
const ForgotPassword = ({ onCancel }) => {
  const [userMail, setUserMail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userMail) return toast.error("Please enter your email");
    const id = toast.loading("Sending reset link...");
    const email = userMail;
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_HOST}/user/forgot-password`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();
    if (data.success) {
      toast.update(id, {
        render: "Password Reset Link Sent",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
      onCancel();
    } else {
      toast.update(id, {
        render: data.message || "Something went wrong",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      onCancel();
    }
  };

  return (
    <div className=" fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className="flex bg-white p-8 rounded-lg flex-col">
        <X className="place-self-end cursor-pointer" onClick={onCancel} />
        <form
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5"
        >
          <img src={bg} alt="" className="w-20" />
          <h1 className="text-3xl text-black">Reset Password</h1>
          <div className="flex items-center gap-3 shadow-lg">
            <UserRoundSearch />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                setUserMail(e.target.value);
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="border-2 p-2 rounded-xl bg-orange-500 text-white px-4 shadow-2xl"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
