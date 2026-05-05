import React from "react";

const UserCard = ({ user }) => {
  const { name, email, username, isActive } = user;

  return (
    <div className="rounded-xl p-5 shadow-md border bg-linear-to-br from-blue-50 to-indigo-100 hover:shadow-xl transition duration-300">
      
      {/* Name */}
      <h2 className="text-xl font-bold text-gray-800">
        {name}
      </h2>

      {/* Username */}
      <p className="text-sm text-indigo-600 mt-1 font-medium">
        @{username}
      </p>

      {/* Email */}
      <p className="text-gray-700 mt-2">
        {email}
      </p>

      {/* Status */}
      <div className="mt-4">
        {isActive ? (
          <span className="px-3 py-1 text-xs bg-green-200 text-green-800 rounded-full font-semibold">
            Active
          </span>
        ) : (
          <span className="px-3 py-1 text-xs bg-red-200 text-red-800 rounded-full font-semibold">
            Inactive
          </span>
        )}
      </div>
    </div>
  );
};

export default UserCard;