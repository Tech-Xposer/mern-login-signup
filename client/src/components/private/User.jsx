import React, { useEffect, useState } from "react";
import { Trash2, Ban, CircleCheck, ArrowDownUp } from "lucide-react";
import { toast } from "react-toastify";
import _ from "underscore";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  const [sort, setSort] = useState(true);
  const navigate = useNavigate()
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
      setUsers(data.data.users.sort());
    }
  };
  useEffect(() => {
    if(localStorage.getItem('role') === 'admin'){
      fetchAllUsers();
    }else{
      toast.warn('You are not authorized to access this page')
      navigate('/auth/dashboard')
    }
  }, []);

  const deleteUser = async (_id) => {
    console.log("Deleting user with user ID:", _id);
    console.log(JSON.parse(localStorage.getItem("user"))._id);
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_HOST}/admin/user/${_id}`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await response.json();
    if (data.success) {
      toast.success("User deleted successfully");
      fetchAllUsers();
      console.log("User deleted successfully");
    } else {
      toast.error("Failed to delete user");
      console.log("Failed to delete user");
    }
  };

  const changeUserRole = (userId) => {
    console.log("Changing role for user with ID:", userId);
  };
  const changeUserStatus = async (userId) => {
    console.log("Changing status for user with ID:", userId);
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_HOST}/admin/user/${userId}/change-status`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const data = await response.json();
    if (data.success) {
      toast.success("User status changed successfully");
      fetchAllUsers();
    } else {
      toast.error("Failed to change user status");
    }
  };

  const handleSortByName = ()=>{
    if(sort){
      setUsers(_.sortBy(users, 'name'));
      setSort(!sort);
    }else{
      setUsers(_.sortBy(users, 'name').reverse());
      setSort(!sort);
    }
  }

  return (
    <div className="flex flex-col top-10 absolute">
      <h1 className="text-3xl text-center">All Users</h1>
      <table className="mt-10">
        <thead>
          <tr className="">
            <th className="px-4 py-2">S No.</th>
            <th className="px-4 py-2">
              <section className="flex gap-2 items-center">
                Name <ArrowDownUp size={16} onClick={handleSortByName}/>
              </section>
            </th>
            <th className="px-4 py-2">
              <section className="flex gap-2 items-center" >
                Email <ArrowDownUp size={16} />
              </section>
            </th>
            <th className="px-4 py-2 ">
              <section className="flex gap-2 items-center">
                Role
                <ArrowDownUp size={16} />
              </section>
            </th>
            <th className="px-4 py-2">
              <section className="flex gap-2 items-center">
                Status
                <ArrowDownUp size={16} />
              </section>
            </th>
            <th className="px-4 py-2 flex items-center gap-2">
              Action
              <ArrowDownUp size={16} />
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
              <td className="px-4 py-2 flex justify-between gap-3">
                <button
                  className="bg-red-600 p-2 rounded-md flex gap-2 items-center text-white text-sm"
                  onClick={() => deleteUser(user?._id)}
                  disabled={
                    user._id === JSON.parse(localStorage.getItem("user"))._id
                  }
                  style={{
                    cursor:
                      user._id === JSON.parse(localStorage.getItem("user"))._id
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  <Trash2 size={16} /> Delete
                </button>

                <button
                  className="bg-blue-600 p-2 rounded-md flex gap-2 items-center text-white shadow-2xl text-sm"
                  onClick={() => changeUserRole(user._id)}
                  disabled={
                    user._id === JSON.parse(localStorage.getItem("user"))._id
                  }
                  style={{
                    cursor:
                      user._id === JSON.parse(localStorage.getItem("user"))._id
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  {user.role === "admin" ? "Make User" : "Make Admin"}
                </button>

                <button
                  className={`${
                    user.isActive ? "bg-orange-500" : "bg-green-600"
                  } p-2 rounded-md flex gap-2 items-center text-white text-sm`}
                  onClick={() => changeUserStatus(user._id)}
                  disabled={
                    user._id === JSON.parse(localStorage.getItem("user"))._id
                  }
                  style={{
                    cursor:
                      user._id === JSON.parse(localStorage.getItem("user"))._id
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  {user.isActive ? (
                    <section className="flex gap-2 items-center">
                      <Ban size={16} />
                      {"Block "}
                    </section>
                  ) : (
                    <section className="flex gap-2 items-center">
                      <CircleCheck size={16} />
                      Active
                    </section>
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
