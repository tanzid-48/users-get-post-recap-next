import React from "react";

const RecentUsers = ({ users = [] }) => {
  return (
    <div className="mt-10 flex flex-col items-center">
      
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Recent Users
      </h2>

      {/* Card */}
      <div className="w-full max-w-2xl bg-purple-200 rounded-2xl shadow-lg p-6">
        
        <div className="space-y-4">
          {users.slice(0, 5).map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition border"
            >
              
              {/* Left */}
              <div>
                <h3 className="font-semibold text-gray-800">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {user.email}
                </p>
              </div>

              {/* Right */}
              <span
                className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  user.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.isActive ? "Active" : "Inactive"}
              </span>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {users.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No users found
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentUsers;