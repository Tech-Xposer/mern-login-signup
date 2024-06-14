import React, { useState } from "react";
import Input from "../inputs/Input";

const EditUserProfile = ({ user, avatar, onCancel }) => {
  const [name, setName] = useState(user?.name);
  const [city, setCity] = useState(user?.city);
  const [state, setState] = useState(user?.state);

  const handleSave = () => {
    console.log("Updated name:", name);
    console.log("Updated city:", city);
    console.log("Updated state:", state);
    onCancel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center flex-col">
      <div className="bg-white p-8 rounded-lg">
        <div className="flex justify-center mb-6">
          <img
            src={avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center flex-col">
          <div className="bg-white p-8 rounded-lg">
            <div className="flex justify-center mb-6">
              <img
                src={avatar}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex mb-2 items-center">
              <label htmlFor="name" className="w-1/3">
                Name:
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                className="p-2 rounded-md border border-gray-300 w-2/3"
                placeholder="Name"
              />
            </div>
            <div className="flex mb-2 items-center">
              <label htmlFor="city" className="w-1/3">
                City:
              </label>
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="p-2 rounded-md border border-gray-300 w-2/3"
                placeholder="City"
              />
            </div>
            <div className="flex mb-2 items-center">
              <label htmlFor="state" className="w-1/3">
                State:
              </label>
              <Input
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="p-2 rounded-md border border-gray-300 w-2/3"
                placeholder="State"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfile;
