"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const Appbar = () => {
  const handleSignIn = () => {
    signIn(); // Directly opens the sign-in form
  };

  const handleSignOut = () => {
    signOut(); // Signs out the user
  };

  return (
    <header className="bg-gray-900 shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or App Name */}
        <Link href="/" className="text-white text-3xl font-bold">
          IndiPay
        </Link>
        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          <Link href="/profile" className="text-white hover:text-gray-300 font-medium transition duration-300">
            Profile
          </Link>
          {/* Conditional rendering based on authentication status */}
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};
