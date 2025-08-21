

import { NextResponse } from "next/server";
import products from "../../../../data/productData.json";


const getRandomProducts = (items, count) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

export async function GET() {
    const featuredProducts = getRandomProducts(products, 4);
    return NextResponse.json(featuredProducts);
}