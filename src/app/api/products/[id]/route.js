
import { NextResponse } from "next/server";
import productsData from "../../../../../data/productData.json";

// In-memory data store for the current session
let products = productsData;

export async function GET(request, { params }) {
  const { id } = params;
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}