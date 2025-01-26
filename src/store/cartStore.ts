// store/cartStore.js
import { atom } from "jotai";
import { ProductType } from "@/types/types";

// Define CartItem type
export type CartItem = ProductType & {
    quantity: number;
};

// Define the cart atom with correct typing
export const cartAtom = atom<CartItem[]>([]);

// Derived state for total items in the cart
export const totalItemsAtom = atom((get) => get(cartAtom).length);

// Derived state for total price with proper typing
export const totalPriceAtom = atom((get) =>
    get(cartAtom).reduce((total, item) => total + item.price * item.quantity, 0)
);

// Helper function to add an item to the cart with proper typing
export const addToCartAtom = atom(null, (get, set, product: ProductType) => {
    const cart = get(cartAtom);
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
        set(
            cartAtom,
            cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        );
    } else {
        set(cartAtom, [...cart, { ...product, quantity: 1 }]);
    }
});

// Helper function to remove an item from the cart
export const removeFromCartAtom = atom(null, (get, set, product: ProductType) => {
    const cart = get(cartAtom);
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
        if (existingItem.quantity > 1) {
            // Decrease quantity if more than 1
            set(
                cartAtom,
                cart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item))
            );
        } else {
            // Remove item completely if quantity is 1
            set(
                cartAtom,
                cart.filter((item) => item.id !== product.id)
            );
        }
    }
});

// Helper function to update the quantity of an item in the cart
export const updateQuantityAtom = atom(
    null,
    (get, set, { productId, quantity }: { productId: number; quantity: number }) => {
        const cart = get(cartAtom);
        set(
            cartAtom,
            cart.map((item) => (item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item))
        );
    }
);
