import React from "react";

interface Product {
    productName: string;
    price: number;
    description: string;
}

interface FeaturedProductsType {
    featuredProducts: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsType> = ({ featuredProducts }) => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Featured Products</h1>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
            </div>

            {/* Featured Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.productName}</h2>
                        <p className="text-green-600 font-bold mb-3">${product.price.toFixed(2)}</p>
                        <p className="text-gray-600">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
