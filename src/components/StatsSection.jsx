import React from "react";

const StatsSection = ({ users = [], posts = [], todos = [] }) => {
  const stats = [
    {
      title: "Users",
      value: users.length,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Posts",
      value: posts.length,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Todos",
      value: todos.length,
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <div className="grid text-center grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {stats.map((item, i) => (
        <div
          key={i}
          className={`rounded-xl p-6 text-white shadow-lg bg-linear-to-r ${item.color} hover:scale-105 transition duration-300`}
        >
          <h2 className="text-4xl font-extrabold">{item.value}</h2>
          <p className="mt-2 text-lg opacity-90">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;