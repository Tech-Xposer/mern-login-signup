import React from "react";
import { Pencil } from "lucide-react";
import { getUser } from "../../utils/utils";

const Card = ({onEdit}) => {
  const user = getUser();
  const avatar = user?.avatar ? `${import.meta.env.VITE_AVATAR_URL}/${user.avatar}` : null;
  return (
    <div className="container flex mx-auto text-center p-8 border border-gray-300 rounded-md shadow-md bg-white w-[600px] h-[300px]">
      <div className="p-4">
        <img src={avatar} alt={user?.name} className="rounded-full w-[200px] h-[200px]" />
        <p>{user?.name}</p>
      </div>
      <div className="gap-5 flex flex-col ">
        <div className="head flex gap-10">
          <div className="text-start">
            <h1 className="text-xl">{user?.name}</h1>
            <p className="text-[12px]">{user?.city}, {user?.state}</p>
          </div>
          <div className="bg-[#14807e] flex h-full w-[100px] items-center justify-center text-white text-sm gap-3 cursor-pointer" onClick={onEdit}>
            <Pencil size={16} /> Edit
          </div>
        </div>
        <hr />
        <div className="text-start  ">
          <section className="flex items-center gap-5 justify-between text-start">
            <h2 className="text-gray-400 text-md">Email:</h2>
            <p className="text-sm "> {user?.email}</p>
          </section>
          <section className="flex items-center gap-5 justify-between text-start">
            <h2 className="text-gray-400 text-md">City:</h2>
            <p className="text-sm "> {user?.city}</p>
          </section>
          <section className="flex items-center gap-5 justify-between text-start">
            <h2 className="text-gray-400 text-md">State:</h2>
            <p className="text-sm "> {user?.state}</p>
          </section>
          <section className="flex items-center gap-5 justify-between text-start">
            <h2 className="text-gray-400 text-md">Mobile:</h2>
            <p className="text-sm "> {user?.mobile}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Card;
