// "use client";

// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// const AddProductPage = () => {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   const [loading, setLoading] = useState(false);

//   // Redirect unauthenticated users
//   useEffect(() => {
//     if (status === "unauthenticated") {
//       router.push("/login");
//     }
//   }, [status, router]);

//   const [productData, setProductData] = useState({
//     name: "",
//     shortDescription: "",
//     detailsDescription: "",
//     features: "",
//     image: "",
//     companyName: "",
//     productOrigin: "",
//     price: "",
//     ratings: "",
//     warrantyDuration: "",
//     productLaunchDate: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProductData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     // Simulate adding the product to a database
//   //     const response = await fetch("/api/products", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         ...productData,
//   //         // Format features as an array of strings
//   //         features: productData.features.split(",").map((f) => f.trim()),
//   //       }),
//   //     });

//   //     if (response.ok) {
//   //       toast.success("Product added successfully!");
//   //       setProductData({
//   //         name: "",
//   //         shortDescription: "",
//   //         detailsDescription: "",
//   //         features: "",
//   //         image: "",
//   //         companyName: "",
//   //         productOrigin: "",
//   //         price: "",
//   //         ratings: "",
//   //         warrantyDuration: "",
//   //         productLaunchDate: "",
//   //       });
//   //       // In a real app, you might want to redirect or update the product list
//   //     } else {
//   //       toast.error("Failed to add product.");
//   //     }
//   //   } catch (error) {
//   //     toast.error("An error occurred. Please try again.");
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true when submission starts

//     try {
//       // Simulate adding the product to a database
//       const response = await fetch("/api/products", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           ...productData,
//           features: productData.features.split(",").map((f) => f.trim()),
//         }),
//       });

//       if (response.ok) {
//         toast.success("Product added successfully!");
//         // Reset form fields
//       } else {
//         toast.error("Failed to add product.");
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     } finally {
//       setLoading(false); // Set loading to false when submission ends
//     }
//   };

//   if (status === "loading") {
//     return (
//       <div className="flex text-3xl lg:text-6xl text-indigo-500 font-bold lg:font-extrabold justify-center items-center h-screen">
//         <p>Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
//         <h1 className="text-2xl font-bold text-center mb-6">Add New Product</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700">Name</label>
//               <input type="text" name="name" value={productData.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <div>
//               <label className="block text-gray-700">Short Description</label>
//               <input type="text" name="shortDescription" value={productData.shortDescription} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <div className="col-span-1 md:col-span-2">
//               <label className="block text-gray-700">Details Description</label>
//               <textarea name="detailsDescription" value={productData.detailsDescription} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
//             </div>
//             <div className="col-span-1 md:col-span-2">
//               <label className="block text-gray-700">Features (comma-separated)</label>
//               <input type="text" name="features" value={productData.features} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <div>
//               <label className="block text-gray-700">Image URL</label>
//               <input type="text" name="image" value={productData.image} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <div>
//               <label className="block text-gray-700">Company Name</label>
//               <input type="text" name="companyName" value={productData.companyName} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <div>
//               <label className="block text-gray-700">Product Origin</label>
//               <input type="text" name="productOrigin" value={productData.productOrigin} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <div>
//               <label className="block text-gray-700">Price (BDT)</label>
//               <input type="number" name="price" value={productData.price} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <div>
//               <label className="block text-gray-700">Ratings</label>
//               <input type="number" step="0.1" name="ratings" value={productData.ratings} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <div>
//               <label className="block text-gray-700">Warranty</label>
//               <input type="text" name="warrantyDuration" value={productData.warrantyDuration} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//             <div className="col-span-1 md:col-span-2">
//               <label className="block text-gray-700">Launch Date</label>
//               <input type="date" name="productLaunchDate" value={productData.productLaunchDate} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
//             </div>
//           </div>
//           {/* <button type="submit" className="cursor-pointer mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300">
//             Add Product
//           </button> */}

//           <button
//             type="submit"
//             disabled={loading} // Disable the button while loading
//             className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer duration-300 disabled:bg-gray-400"
//           >
//             {loading ? (
//               <div className=" flex items-center justify-center space-x-2">
//                 <svg
//                   className="animate-spin h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 <span>Adding...</span>
//               </div>
//             ) : (
//               "Add Product"
//             )}
//           </button>

//         </form>
//         <p className="mt-4 text-center text-sm text-gray-600">
//           Go Back to{" "}
//           <a href="/" className="text-orange-500 font-bold hover:underline">
//             Home |
//           </a>
//           <a> </a>
//           <a href="/products" className="text-orange-500 font-bold hover:underline">
//             Products |
//           </a>
//           <a> </a>
//           <a href="/api/products" className="text-orange-500 font-bold hover:underline">
//             Api
//           </a>

//         </p>
//       </div>
//     </div>
//   );
// };

// export default AddProductPage;



// app/dashboard/add-product/page.js

"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddProductPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  
  // This useEffect will run after the component has rendered
  // and will handle the redirection logic.
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const [productData, setProductData] = useState({
    name: "",
    shortDescription: "",
    detailsDescription: "",
    features: "",
    image: "",
    companyName: "",
    productOrigin: "",
    price: "",
    ratings: "",
    warrantyDuration: "",
    productLaunchDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start the loading state

    try {
      // Add a simulated network delay to show the spinner
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...productData,
          features: productData.features.split(",").map((f) => f.trim()),
        }),
      });

      if (response.ok) {
        toast.success("Product added successfully!");
        // Reset form fields after successful submission
        setProductData({
          name: "",
          shortDescription: "",
          detailsDescription: "",
          features: "",
          image: "",
          companyName: "",
          productOrigin: "",
          price: "",
          ratings: "",
          warrantyDuration: "",
          productLaunchDate: "",
        });
      } else {
        toast.error("Failed to add product.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // End the loading state
    }
  };

  // Conditionally render a loading screen while NextAuth checks session status
  if (status === "loading") {
    return (
      <div className="flex text-3xl lg:text-6xl text-indigo-500 font-bold lg:font-extrabold justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  // Conditionally render the form only if the user is authenticated
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <input type="text" name="name" value={productData.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-gray-700">Short Description</label>
              <input type="text" name="shortDescription" value={productData.shortDescription} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700">Details Description</label>
              <textarea name="detailsDescription" value={productData.detailsDescription} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700">Features (comma-separated)</label>
              <input type="text" name="features" value={productData.features} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-gray-700">Image URL</label>
              <input type="text" name="image" value={productData.image} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-gray-700">Company Name</label>
              <input type="text" name="companyName" value={productData.companyName} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-gray-700">Product Origin</label>
              <input type="text" name="productOrigin" value={productData.productOrigin} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-gray-700">Price (BDT)</label>
              <input type="number" name="price" value={productData.price} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-gray-700">Ratings</label>
              <input type="number" step="0.1" name="ratings" value={productData.ratings} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-gray-700">Warranty</label>
              <input type="text" name="warrantyDuration" value={productData.warrantyDuration} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-700">Launch Date</label>
              <input type="date" name="productLaunchDate" value={productData.productLaunchDate} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition cursor-pointer duration-300 disabled:bg-gray-400"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Adding...</span>
              </div>
            ) : (
              "Add Product"
            )}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Go Back to{" "}
          <a href="/" className="text-orange-500 font-bold hover:underline">
            Home |
          </a>
          <a> </a>
          <a href="/products" className="text-orange-500 font-bold hover:underline">
            Products |
          </a>
          <a> </a>
          <a href="/api/products" className="text-orange-500 font-bold hover:underline">
            Api
          </a>
        </p>
      </div>
    </div>
  );
};

export default AddProductPage;