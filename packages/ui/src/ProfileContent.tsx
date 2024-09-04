"use client";

import { signOut } from "next-auth/react";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
import { Button } from "@repo/ui/button";

const ProfileContent = ({ session }: { session: any }) => {
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    window.location.href = "/signin"; // Redirect manually on the client side
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="relative w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg">
        <img
          src="/shinchan.jpeg"
          alt="Profile Picture"
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full object-cover border-4 border-gray-700 shadow-lg"
        />
        <div className="pt-20">
          <h6 className="font-bold mb-4 text-center">{session.user.id}</h6>
          <h2 className="text-3xl font-bold mb-4 text-center">
            {session.user.name || "John Doe"}
          </h2>
          <p className="text-gray-400 mb-2 text-center">
            <strong>Email:</strong> {session.user.email}
          </p>
          <p className="text-gray-400 text-center">
            <strong>Phone Number:</strong> {session.user.email}
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <Button
            onClick={() => (window.location.href = "/profile/edit")}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            <FaEdit className="mr-2" /> Edit Profile
          </Button>
          <Button
            onClick={handleSignOut}
            className="flex items-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
          >
            <FaSignOutAlt className="mr-2" /> Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
