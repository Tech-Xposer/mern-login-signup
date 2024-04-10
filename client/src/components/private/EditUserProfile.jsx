import React, { useState } from 'react';

const EditUserProfile = ({ user, avatar, onCancel }) => {
  const [name, setName] = useState(user?.name);
  const [jobTitle, setJobTitle] = useState(user?.jobTitle);
  const [articles, setArticles] = useState(user?.articles);
  const [followers, setFollowers] = useState(user?.followers);
  const [rating, setRating] = useState(user?.rating);

  const handleSave = () => {
    // Implement functionality to save the edited profile data
    // For demonstration, you can log the updated values
    console.log("Updated name:", name);
    console.log("Updated job title:", jobTitle);
    console.log("Updated articles:", articles);
    console.log("Updated followers:", followers);
    console.log("Updated rating:", rating);

    // After saving, cancel edit mode
    onCancel();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-center mb-6">
        <img src={avatar} alt="Profile" className="w-32 h-32 rounded-full object-cover" />
      </div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 p-2 rounded-md border border-gray-300 w-full"
        placeholder="Name"
      />
      <input
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className="mb-2 p-2 rounded-md border border-gray-300 w-full"
        placeholder="Job Title"
      />
      <div className="flex justify-between">
        <div className="text-gray-600">
          <p className="mb-1">Articles</p>
          <p className="mb-1">Followers</p>
          <p className="mb-1">Rating</p>
        </div>
        <div className="text-gray-800">
          <input
            value={articles}
            onChange={(e) => setArticles(e.target.value)}
            className="mb-1 p-1 rounded-md border border-gray-300"
            style={{ width: '3rem' }}
          />
          <input
            value={followers}
            onChange={(e) => setFollowers(e.target.value)}
            className="mb-1 p-1 rounded-md border border-gray-300"
            style={{ width: '3rem' }}
          />
          <input
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="mb-1 p-1 rounded-md border border-gray-300"
            style={{ width: '3rem' }}
          />
        </div>
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
  );
};

export default EditUserProfile;
