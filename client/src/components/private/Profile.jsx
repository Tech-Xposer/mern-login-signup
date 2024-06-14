import React, { useState } from "react";
import Card from "./Card";
import bg from "../../assets/profile.png";
import EditUserProfile from "./EditUserProfile";


const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [user] = useState(JSON.parse(localStorage.getItem("user")) || {});
  const avatar = user?.avatar ? `${import.meta.env.VITE_AVATAR_URL}/${user.avatar}` : null;
console.log(avatar);
  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="flex flex-row justify-center">
      <div>
        <img
          src={bg}
          alt={`Profile of ${user?.name}`}
          style={{ mixBlendMode: "multiply" }}
        />
      </div>
      {editMode &&
        <EditUserProfile
          user={user}
          avatar={avatar}
          onCancel={handleEditToggle}
        />
      }
       
        <Card user={user} avatar={avatar} onEdit={handleEditToggle} />
    </div>
  );
};

export default Profile;
