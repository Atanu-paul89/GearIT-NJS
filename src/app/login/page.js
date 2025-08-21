// app/login/page.js

"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // This will send the credentials to the NextAuth.js API route
    const result = await signIn("credentials", {
      redirect: false, // Prevents an immediate redirect
      email,
      password,
    });

    if (result.ok) {
      // On successful login, redirect to the products page
      router.push("/products"); // As per assignment requirement [cite: 13]
    } else {
      // Handle login error, e.g., show an alert
      alert("Login failed: " + result.error);
    }
  };

  return (
    <div className="flex bg-white   items-center justify-center min-h-screen lg:bg-gray-200">
      <div className=" mx-1 bg-white    place-content-center lg:min-h-0 lg:place-content-start p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">PLease Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-orange-500 font-bold hover:underline">
            Register here
          </a>
        </p>
        <p className="mt-2 text-center text-sm text-gray-600">
          Go Back to{" "}
          <a href="/" className="text-orange-500 font-bold hover:underline">
            Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;