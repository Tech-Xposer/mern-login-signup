import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getUser } from "../../utils/utils";
import bg from "../../assets/profile.png";
import EditUserProfile from "./EditUserProfile";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || {});

  const avatar = user?.avatar
    ? `${import.meta.env.VITE_AVATAR_URL}/${user.avatar}`
    : null;

  useEffect(() => {
    // You can use useEffect here if you want to update the user state later based on certain conditions
  }, []); // Add dependencies if necessary

  const handleEditToggle = () => {
    setEditMode((prevMode) => !prevMode); // Toggle edit mode
  };

  return (
    <div className="flex flex-row justify-center">
      <div>
        <img
          src={bg} // Background image
          alt={`Profile of ${user?.name}`}
          style={{ mixBlendMode: "multiply" }} // Style applied to image
        />
      </div>
      {editMode ? (
        // Conditional rendering based on edit mode
        <EditUserProfile
          user={user}
          avatar={avatar}
          onCancel={handleEditToggle}
        />
      ) : (
        <Card user={user} avatar={avatar} onEdit={handleEditToggle} />
      )}
    </div>
  );
};

export default Profile;
