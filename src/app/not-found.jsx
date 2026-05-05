import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
         <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 px-6">
      
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-600 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
    </div>
    );
};

export default NotFound;