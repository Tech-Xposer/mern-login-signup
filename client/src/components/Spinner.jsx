import React from "react";
import spinner from "../assets/spinner.gif";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <img src={spinner} alt="" />
    </div>
  );
};

export default Spinner;
