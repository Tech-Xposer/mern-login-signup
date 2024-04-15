import React from "react";
import bg from "../assets/secure.png";
import Input from "./inputs/Input";
const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  const handleFormData = () => {};
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <img src={bg} alt="" />
      </div>
      <div className="">
        <form method="POST" onSubmit={handleSubmit} className="flex flex-col items-center">
          <h1>Reset Password</h1>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleFormData}
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
