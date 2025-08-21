// app/dashboard/add-product/page.js

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';

const AddProductPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // Redirect to login page 
    }
  }, [status, router]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to an API to add a new product
    console.log({ name, description, price });
    toast.success("Product added successfully!"); // Display toast message 
  };

  // Show a loading state while authentication is being checked
  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
        {/* You can add a spinner component here for a better UI */}
      </div>
    );
  }

  // Only render the form if the user is authenticated
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price (BDT)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;