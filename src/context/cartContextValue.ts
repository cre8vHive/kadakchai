import { createContext } from "react";
import type { Product, ProductVariant } from "../types/store";

export type CartLine = {
  productSlug: string;
  quantity: number;
  variantId: string;
};

export type CartItem = {
  key: string;
  product: Product;
  quantity: number;
  variant: ProductVariant;
};

export type CartContextValue = {
  clearCart: () => void;
  closeCart: () => void;
  isOpen: boolean;
  items: CartItem[];
  itemCount: number;
  openCart: () => void;
  removeItem: (key: string) => void;
  subtotal: number;
  toggleCart: () => void;
  updateQuantity: (key: string, quantity: number) => void;
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
};

export const CartContext = createContext<CartContextValue | null>(null);
