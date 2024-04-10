import React from "react";
import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="hidden sm:flex justify-between items-center mx-4">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="" className="w-[80px]" />
        <h1 className="text-3xl bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">AuthGuardian</h1>
      </div>
      {/* <div className="nav-links">
        <ul className="flex gap-4">
          <li>Login</li>
          <li>Signup</li>
        </ul>
      </div> */}
      <div className="nav-icons">
        <ul className="flex gap-3">
          <li>
            <Github />
          </li>
          <li>
            <Linkedin color="#0077B5"/>
          </li>
          <li>
            <Twitter color="#1DA1F2"/>
          </li>
          <li>
            <Instagram color="#e401b3" />
          </li>
          <li>
            <Facebook color="#316FF6" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
