"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null); 

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const number = formData.get("number") as string;
    const password = formData.get("password") as string;

    try {
      const result = await signIn("credentials", {
        redirect: false,
        number,  
        password, 
        name,     
        email,    
      });

      if (result?.ok) {
        router.push("/");
      } else {
        setError("Invalid credentials. Please try again.");
        console.error(result?.error);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred while signing in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 rounded-xl shadow-2xl p-10 max-w-md w-full"
        >
          <h2
            className="text-4xl font-extrabold text-center mb-8"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <span className="text-purple-600">Welcome to</span>{" "}
            <span style={{ color: "#FF9933" }}>I</span>
            <span style={{ color: "#FF9933" }}>n</span>
            <span style={{ color: "#FF9933" }}>d</span>
            <span className="text-blue-600">i</span>
            <span style={{ color: "#138808" }}>P</span>
            <span style={{ color: "#138808" }}>a</span>
            <span style={{ color: "#138808" }}>y</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 px-4 py-3 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full bg-gray-700 text-white"
                style={{ fontFamily: "Roboto, sans-serif" }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 px-4 py-3 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full bg-gray-700 text-white"
                style={{ fontFamily: "Roboto, sans-serif" }}
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-semibold text-gray-300"
              >
                Phone Number
              </label>
              <input
                id="number"
                name="number"
                type="text"
                required
                className="mt-2 px-4 py-3 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full bg-gray-700 text-white"
                style={{ fontFamily: "Roboto, sans-serif" }}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-300"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-2 px-4 py-3 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full bg-gray-700 text-white"
                style={{ fontFamily: "Roboto, sans-serif" }}
              />
            </div>
            {error && (
              <div className="text-red-500 text-center mt-4">{error}</div>
            )}
            <div className="flex items-center justify-between">
              <Link
                href="/forgot-password"
                className="text-sm font-semibold text-purple-400 hover:text-purple-300"
              >
                Forgot your password?
              </Link>
            </div>
            <div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-5 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {loading ? "Signing in..." : "Sign in"}
              </motion.button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p
              className="text-sm text-gray-400"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-purple-400 hover:text-purple-300"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
