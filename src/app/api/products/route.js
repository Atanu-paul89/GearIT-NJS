// // app/api/products/route.js

// import { NextResponse } from "next/server";
// import productsData from "../../../../data/productData.json";

// // GET handler to retrieve all products
// export async function GET() {
//     return NextResponse.json(productsData);
// }

// export async function POST(request) {
//     const newProduct = await request.json();

//     const newId = productsData.length + 1;

//     console.log(`Simulating adding a new product with ID ${newId}:`, newProduct);

//     // Return a success response
//     return NextResponse.json(
//         {
//             message: "Product added successfully (simulated).",
//             data: { ...newProduct, id: newId },
//         },
//         { status: 201 }
//     );
// }


// app/api/products/route.js

import { NextResponse } from "next/server";
import initialProductsData from "../../../../data/productData.json";

// Use a variable to store products in memory for the current session.
// This array will be updated by POST requests and read by GET requests.
const products = [...initialProductsData];

// GET handler to retrieve all products
export async function GET() {
  return NextResponse.json(products);
}

// POST handler to add a new product
export async function POST(request) {
  const newProduct = await request.json();
  
  // Create a new ID for the product
  const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

  // Add the new product to our in-memory array
  const finalProduct = { ...newProduct, id: newId };
  products.push(finalProduct);

  console.log("New product added:", finalProduct);

  return NextResponse.json(
    {
      message: "Product added successfully (simulated).",
      data: finalProduct,
    },
    { status: 201 }
  );
}