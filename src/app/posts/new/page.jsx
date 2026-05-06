"use client";
import Link from "next/link";
import React, { useState } from "react";

const NewPostsPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const newPost = Object.fromEntries(formData.entries());
    //   console.log("post",newPost);

    const req = await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const res = await req.json();
    if (res.success) {
      alert("Post added successfully!");
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
   
   >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add New Post
        </h2>

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          required
          className="w-full p-2 border rounded-md"
        />

        {/* Body */}
        <textarea
          name="body"
          placeholder="Post Content"
          required
          rows="4"
          className="w-full p-2 border rounded-md"
        />

        {/* User ID */}
        <input
          type="number"
          name="userId"
          placeholder="User ID"
          required
          className="w-full p-2 border rounded-md"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          {loading ? "Adding..." : "Add Post"}
        </button>
        <Link
          className="mb-4 bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition "
          href={"/"}
        >
          Home
        </Link>
      </form>
    </div>
  );
};

export default NewPostsPage;
