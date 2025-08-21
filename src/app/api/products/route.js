import { NextResponse } from "next/server";
import initialProductsData from "../../../../data/productData.json";

const products = [...initialProductsData];


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