// app/register/page.js

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

const RegisterPage = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Here you would typically send a request to a registration API endpoint.
    // For this assignment, we'll simulate a successful registration.
    console.log("Registering user with:", { name, email, password });

    // Simulate an API call
    try {
      // In a real application, a successful API response would be
      // a trigger to redirect the user.
      const response = { success: true }; 

      if (response.success) {
        toast.success("Registration successful! Please log in.");
        router.push("/login");
      } else {
        // Handle API errors
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-white min-h-screen lg:bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
              required
            />
          </div>
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
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 font-bold hover:underline">
            Login here
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

export default RegisterPage;