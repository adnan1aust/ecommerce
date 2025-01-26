"use client";

import { useAtom } from "jotai";
import { cartAtom } from "@/store/cartStore";
import { ProductType } from "@/types/types";
import AddToCartButton from "./AddToCartButton";
import RemoveFromCartButton from "./RemoveFromCartButton";

interface AddOrRemoveFromCartProps {
    product: ProductType;
}

const AddOrRemoveFromCart = ({ product }: AddOrRemoveFromCartProps) => {
    const [cart] = useAtom(cartAtom);

    // Find item in cart and get quantity
    const cartItem = cart.find((item) => item.id === product.id);
    const quantity = cartItem?.quantity || 0;

    return (
        <div className="flex items-center gap-2">
            <AddToCartButton product={product} />
            {quantity > 0 && (
                <>
                    <span className="min-w-[2rem] text-center font-medium">{quantity}</span>
                    <RemoveFromCartButton product={product} />
                </>
            )}
        </div>
    );
};

export default AddOrRemoveFromCart;
