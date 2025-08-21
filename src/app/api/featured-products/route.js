// app/api/featured-products/route.js

import { NextResponse } from "next/server";
import products from "../../../../data/productData.json";

// Utility to get a random set of products
const getRandomProducts = (items, count) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

export async function GET() {
    const featuredProducts = getRandomProducts(products, 4);
    return NextResponse.json(featuredProducts);
}