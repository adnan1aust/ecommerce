// page.tsx
import { notFound } from "next/navigation";
import { ProductType } from "@/types/types";
import Wrapper from "@/app/_shared/Wrapper";
import Header from "@/app/_shared/Header";
import AddOrRemoveFromCart from "@/app/_shared/AddOrRemoveFromCart";

async function getProduct(id: string): Promise<ProductType> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
    try {
        const { id } = await params;
        const product = await getProduct(id);

        return (
            <Wrapper>
                <Header />
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                        <img src={product.image} alt={product.title} className="w-full h-auto object-contain" />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
                        <p className="text-xl font-semibold mb-4">${product.price}</p>
                        <p className="mb-4">{product.description}</p>
                        <div className="mb-4">
                            <span className="font-semibold">Category: </span>
                            {product.category}
                        </div>
                        <AddOrRemoveFromCart product={product} />
                    </div>
                </div>
            </Wrapper>
        );
    } catch (error) {
        notFound();
        console.log(error);
    }
}
