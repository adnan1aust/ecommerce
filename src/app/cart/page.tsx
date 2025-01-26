"use client";
import React from "react";
import { useAtom } from "jotai";
import { cartAtom, totalPriceAtom } from "@/store/cartStore";
import Wrapper from "../_shared/Wrapper";
import Header from "../_shared/Header";
import AddToCartButton from "../_shared/AddToCartButton";
import RemoveFromCartButton from "../_shared/RemoveFromCartButton";
import Link from "next/link";

const CartPage = () => {
    const [cartItems] = useAtom(cartAtom);
    const [totalPrice] = useAtom(totalPriceAtom);

    if (cartItems.length === 0) {
        return (
            <Wrapper>
                <Header />
                <div className="text-center py-8">
                    <h2 className="text-xl">Your cart is empty</h2>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <Header />
            <div className="container mx-auto py-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Shopping Cart</h1>
                    {cartItems.length > 0 && (
                        <Link
                            href="/checkout"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
                        >
                            Proceed to Checkout
                        </Link>
                    )}
                </div>
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 border p-4 rounded-lg">
                            <img src={item.image} alt={item.title} className="w-24 h-24 object-contain" />
                            <div className="flex-1">
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-gray-600">${item.price}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <RemoveFromCartButton product={item} />
                                <span className="mx-2">{item.quantity}</span>
                                <AddToCartButton product={item} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-right">
                    <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default CartPage;
