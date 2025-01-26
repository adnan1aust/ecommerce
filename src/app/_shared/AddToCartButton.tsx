"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { addToCartAtom } from "@/store/cartStore";
import { ProductType } from "@/types/types";
import { useSetAtom } from "jotai";

interface AddToCartButtonProps {
    className?: string;
    product: ProductType;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ className, product }) => {
    const addToCart = useSetAtom(addToCartAtom);

    return (
        <Button
            onClick={() => {
                addToCart(product);
            }}
            className={className}
            size="icon"
            variant="outline"
            aria-label="Add to cart"
        >
            <Plus className="h-4 w-4" />
        </Button>
    );
};

export default AddToCartButton;
