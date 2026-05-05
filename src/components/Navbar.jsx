"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Posts", path: "/posts" },
    { name: "Todos", path: "/todos" },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold">
        TaskManager
      </div>

      {/* Links */}
      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`hover:text-yellow-400 transition ${
              pathname === item.path ? "text-yellow-400" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;