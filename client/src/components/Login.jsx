import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { LogIn, User, Key } from "lucide-react";
import LottieAnimation from "./LottieAnimation";
import Input from "./inputs/Input";
import { setToken, getUser } from "../utils/utils";
import animationData from "../assets/lotties/login.json";
import Spinner from "./Spinner";
const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (getUser()) {
      navigate("/auth/dashboard");
    }
  }, [navigate]);

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const email = formData.email;
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    if (!regex.test(email)) {
      toast.error("Invalid email");
      return;
    }
    setLoading(true);

    const response = await fetch(
      `${import.meta.env.VITE_SERVER_HOST}/user/forgot-password`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ email }),
      }
    );
    const data = await response.json();

    console.log(data);
    if (data.success) {
      setLoading(false);
      toast.success("Password reset link sent to your email");
    } else {
      toast.error(data.message);
    }
    // toast.success('Password reset link sent to your email');
  };

  const loginUser = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_HOST}/auth/login`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (data.success) {
        setToken(data.data.token);
        toast.success("Logged In Successfully");
        setTimeout(() => {
          navigate("/auth/dashboard");
        }, 500);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };
  if(loading){
    return <Spinner/>
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col mt-[300px] items-center gap-5 sm:flex-row sm:mt-0 justify-between w-screen m-40">
        <div className="scale-75 sm:scale-100">
          <LottieAnimation animationData={animationData} />
        </div>
        <div className="scale-75 p-10 sm:scale-100 flex flex-col justify-center border-2 bg-white rounded-2xl shadow-2xl items-center sm:w-[500px] sm:h-[450px]">
          <h1 className="text-4xl mb-12 text-orange-400">Login Here</h1>
          <form
            action=""
            method="post"
            onSubmit={handleSubmit}
            className="flex flex-col items-center space-y-5 w-full"
          >
            <div className="flex items-center mb-4">
              <User className="mr-2" color="#e18505" />
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                label="Email"
                onChange={handleFormData}
              />
            </div>
            <div className="flex items-center mb-4">
              <Key color="#e18505" className="mr-2" />
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
                onChange={handleFormData}
              />
            </div>
            <div>
              <button
                type="submit"
                value="Login"
                className="border-2 p-2 rounded-xl bg-orange-500 text-white px-4 shadow-2xl"
              >
                Login
              </button>
            </div>
          </form>
          <div className="gap-3 flex flex-col items-center">
            <NavLink to="/signup">
              <p className="text-orange-400 mt-4 flex gap-1 items-center">
                Don't have an account? Signup Here <LogIn />
              </p>
            </NavLink>
            <p className="text-orange-400">OR</p>
            <button onClick={handleResetPassword}>
              <p className="text-orange-400 flex gap-1 items-center">
                Forgot your password? Reset Here
              </p>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
