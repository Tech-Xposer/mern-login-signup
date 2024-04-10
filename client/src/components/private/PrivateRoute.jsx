import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, removeToken, removeUser, setUser } from "../../utils/utils";
import { toast } from "react-toastify";

const PrivateRoute = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = getToken();
      if (!token) {
        navigate("/");
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
          setUser(data.data);
          localStorage.setItem("role", data.data.role);
        } else {
          removeToken();
          removeUser();
          toast.error("Please Login!");
          navigate("/");
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred. Please try again later.");
        // Handle error (e.g., show error message to user)
      }
    };

    fetchUser();
  }, [navigate]);

  return <Component />;
};

export default PrivateRoute;
