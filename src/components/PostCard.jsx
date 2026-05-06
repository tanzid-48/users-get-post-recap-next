import React from "react";

const PostCard = ({ post }) => {
  const { id, title, body, userId, createdAt } = post;

  return (
    <div className="bg-linear-to-br from-indigo-50 to-blue-100 border rounded-2xl p-5 shadow-md hover:shadow-xl transition duration-300">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-500">#Post-{id}</span>
        <span className="text-xs bg-indigo-200 text-indigo-700 px-2 py-1 rounded-full">
          User {userId}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-2">
        {title}
      </h2>

      {/* Body */}
      <p className="text-sm text-gray-600 line-clamp-3">
        {body}
      </p>

      {/* Footer */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs text-gray-400">
          {createdAt}
        </span>

        <button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition">
          View
        </button>
      </div>
    </div>
  );
};

export default PostCard;