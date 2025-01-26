"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { Minus } from "lucide-react";
import { removeFromCartAtom } from "@/store/cartStore";
import { ProductType } from "@/types/types";
import { useSetAtom } from "jotai";

interface RemoveFromCartButtonProps {
    className?: string;
    product: ProductType;
}

const RemoveFromCartButton: FC<RemoveFromCartButtonProps> = ({ className, product }) => {
    const removeFromCart = useSetAtom(removeFromCartAtom);

    return (
        <Button
            onClick={() => {
                removeFromCart(product);
            }}
            className={className}
            size="icon"
            variant="outline"
            aria-label="Remove from cart"
        >
            <Minus className="h-4 w-4" />
        </Button>
    );
};

export default RemoveFromCartButton;
