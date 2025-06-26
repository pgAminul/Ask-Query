"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md text-center">
        <div className="flex justify-center text-blue-500 text-6xl mb-4">
          <FaSearch />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          404 - Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
