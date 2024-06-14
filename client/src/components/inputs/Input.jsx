import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        {...props}
        className="border-1 p-2 rounded-lg w-[300px] shadow-2xl transition-all duration-300 pl-3 text-gray-500 focus:outline-teal-100 bg-blue-50"
        type={showPassword ? "text" : props.type } visibility='hidden'
      />
      {props.type === "password" && (
        <button
          aria-label={showPassword ? "Hide password" : "Show password"}
          type="button"
          onClick={handleShowPassword}
          className="absolute top-0 right-0 h-full flex items-center px-2 transition-all duration-300 transform hover:scale-105"
        >
          {showPassword ? (
            <EyeOff color={props.color || "#e18505"} className="ml-2" />
          ) : (
            <Eye color={props.color ?? "#e18505"} className="ml-2" />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
