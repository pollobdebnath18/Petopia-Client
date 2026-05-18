"use client";

import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 bg-gradient-to-r from-blue-100 via-pink-100 to-purple-100">
      <div className="text-center max-w-md bg-white/70 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white">
        {/* 404 */}
        <h1 className="text-7xl font-bold text-blue-600">404</h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Oops! Page Not Found 🐾
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-600">
          The page you are looking for doesn’t exist or has been moved. Let’s
          get you back to finding adorable pets.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md cursor-pointer">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
