import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProductType } from "@/types/types";

interface SingleProductCategoryListProps {
    category: string;
}

async function SingleProductCategoryList({ category }: SingleProductCategoryListProps) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`, { cache: "no-store" });
    const products: ProductType[] = await response.json();

    return (
        <div className="py-4">
            <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <Link
                        href={`/product/${product.id}`}
                        key={product.id}
                        className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div className="relative h-48 w-full mb-4">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <h3 className="font-medium line-clamp-2">{product.title}</h3>
                        <p className="text-gray-600 mt-2">${product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SingleProductCategoryList;
