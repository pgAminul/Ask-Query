"use client";

import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md text-center animate-pulse">
        <div className="flex justify-center mb-4 text-red-500 text-6xl">
          <FaExclamationTriangle />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">
          We encountered an unexpected error. Please try again or go back later.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
        >
          <MdRefresh className="text-xl" />
          Try Again
        </button>
      </div>
    </div>
  );
}
