import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden mt-15 p-20 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600  text-white shadow-lg">
      
      {/* Glow effect */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-400/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Task Manager Dashboard 🚀
        </h1>

        <p className="mt-3 text-lg text-gray-100">
          Manage users, posts and todos easily in one place
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/users"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            View Users
          </Link>

          <Link
            href="/users/new"
            className="px-6 py-3 bg-black/20 backdrop-blur-md border border-white/30 rounded-lg hover:bg-black/30 transition"
          >
            Add User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;