import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">
      
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">
            Task Manager
          </h2>
          <p className="mt-3 text-sm text-gray-400">
            Manage users, posts, and todos efficiently with a modern dashboard system.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/users" className="hover:text-white">
                Users
              </Link>
            </li>
            <li>
              <Link href="/users/new" className="hover:text-white">
                Add User
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: support@taskmanager.com</p>
          <p className="text-sm mt-1">Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Task Manager. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;