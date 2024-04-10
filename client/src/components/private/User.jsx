import React, { useEffect } from "react";
import { Trash2 } from "lucide-react";

const User = () => {
  useEffect(() => {
    const fetchAllUsers = async () => {
      const response = await fetch(`${import.meta.env.VITE_SERVER_HOST}/auth/all-users`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        }
      });
    };
    fetchAllUsers();
  }, []);
  const users = ["User1", "User2", "User3", "User4", "User5"];
  return (
    <div className=" ">
      <h1>All Users</h1>
      <ul>
        {users.map((user, i) => {
          return (
            <div className="flex items-center p-2 gap-5" key={i}>
              <li>{user}</li>
              <button
                className="bg-red-600 p-1 rounded-md"
                onClick={() => console.log(i)}
              >
                <Trash2 />
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default User;
