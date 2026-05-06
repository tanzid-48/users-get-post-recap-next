import PostCard from "@/components/PostCard";
import Link from "next/link";
import React from "react";

const GetPostsData = async () => {
  const res = await fetch("https://user-express-server-1.onrender.com/posts");
  return res.json();
};

const PostsPage = async () => {
  const posts = await GetPostsData();
  return (
    <div>
      <h2>Post: {posts.length}</h2>
      <div className=" flex gap-3 py-3">
        <Link className="btn bg-yellow-500 p-1 rounded-md" href={`/`}>Home</Link>
      <Link className="btn bg-purple-500 p-1 rounded-md" href={`/posts/new`}>Add New User</Link>

      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {
        posts.map(post => <PostCard key={post.id} post = {post}></PostCard>)
      }
      </div>

    </div>
  );
};

export default PostsPage;
