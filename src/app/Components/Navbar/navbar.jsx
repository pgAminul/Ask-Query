// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              YourLogo
            </Link>
          </div>

          {/* Center navigation */}
          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/all-questions"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              All Questions
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </Link>
          </div>

          {/* Right side auth section */}
          <div className="flex items-center gap-4">
            <a href="/register">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                Sign in
              </button>
            </a>
            <a href="/login">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
                Login
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
