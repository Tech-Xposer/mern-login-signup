import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken, removeUser } from "../../utils/utils";
import { toast } from "react-toastify";
import Spinner from "../Spinner";

const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = getToken();
      if (!token) {
        handleUnauthorizedAccess();
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_HOST}/auth/current-user`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        if (data.success) {
          localStorage.setItem("user", JSON.stringify(data.data));
          localStorage.setItem("role", data.data.role);
        } else {
          handleUnauthorizedAccess();
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred. Please try again later.");
        // Handle error (e.g., show error message to user)
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleUnauthorizedAccess = () => {
    localStorage.clear()
    toast.error("Please Login!");
    navigate("/");
  };

  if (loading) {
    // Display a loading indicator
    return <Spinner/>
  }

  return <Component />;
};

export default PrivateRoute;
