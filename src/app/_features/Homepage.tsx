import React from "react";
import Link from "next/link";
import Wrapper from "../_shared/Wrapper";
import { ProductType } from "@/types/types";

async function HomePage() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products: ProductType[] = await response.json();

    return (
        <Wrapper>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product: ProductType) => (
                        <Link
                            href={`/product/${product.id}`}
                            key={product.id}
                            className="block border rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="aspect-square w-full mb-4">
                                <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                            </div>
                            <h2 className="text-lg font-semibold mb-2 line-clamp-2">{product.title}</h2>
                            <p className="text-gray-600 font-medium">${product.price}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
}

export default HomePage;
