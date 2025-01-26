"use client";

import { useAtomValue } from "jotai";
import { cartAtom } from "@/store/cartStore";

const TotalProducts = () => {
    const cart = useAtomValue(cartAtom);

    const totalItems = cart.reduce((total, item) => total + (item.quantity || 1), 0);

    return (
        <div className="inline-flex items-center justify-center text-3xl">
            <span className="text-sm font-medium">{totalItems}</span>
        </div>
    );
};

export default TotalProducts;
