import React from "react";
import Input from "./inputs/Input";

const ResetPassword = () => {
  return (
    <div className="flex justify-center items-center   ">
        
      <div className="flex justify-center items-center flex-col shadow-2xl bg-gray-200 p-10" >
        <h1 className="text-3xl">Reset Password</h1>
        <form action="post" className="flex flex-col gap-10 mt-10">
          <Input
            placeholder="Enter your new password"
            type="password"
            name="password"
          />
          <Input
            placeholder="Confirm your new password"
            type="password"
            name="confirmPassword"
          />
          <button className="border-2 p-2 rounded-xl bg-orange-500 text-white px-4 shadow-2xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
