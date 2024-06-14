import React, { useEffect, useState } from "react";
import _, { map } from "underscore";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const fetchAllUsers = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_HOST}/admin/users`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await response.json();
    if (data.success) {
      setUsers(data.data.users);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("role") === "admin") {
      fetchAllUsers();
    }
  }, []);

  // Function to toggle sorting order and sort users by name
  const handleSortByName = (itratee) => {
    const sortedUsers = _.sortBy(users, itratee);
    setUsers(sortedUsers);
  };

  return (
    <div className="flex flex-col top-10 absolute">
      <h1 className="text-3xl text-center">All Users</h1>
      <table className="mt-10">
        <thead>
          <tr className="">
            <th className="px-4 py-2">S No.</th>
            <th className="px-4 py-2" onClick={() => handleSortByName("name")}>
              Name
            </th>
            <th className="px-4 py-2" onClick={() => handleSortByName("email")}>
              Email
            </th>
            <th
              className="px-4 py-2"
              onClick={() => setUsers(_.sortBy(users, "role", "desc"))}
            >
              Role
            </th>
            <th
              className="px-4 py-2"
              onClick={() => handleSortByName("isActive")}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td className=" px-4 py-2">{index + 1}.</td>
              <td className=" px-4 py-2">{user?.name}</td>
              <td className=" px-4 py-2">{user?.email}</td>
              <td className=" px-4 py-2">
                {user?.role.charAt(0).toUpperCase() + user?.role.slice(1)}
              </td>
              <td className=" px-4 py-2">
                {user?.isActive ? "Active" : "Blocked"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default Home;
