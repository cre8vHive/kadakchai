import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { findProduct } from "../data/store";
import type { Product, ProductVariant } from "../types/store";

type CartLine = {
  productSlug: string;
  quantity: number;
  variantId: string;
};

type CartItem = {
  key: string;
  product: Product;
  quantity: number;
  variant: ProductVariant;
};

type CartContextValue = {
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

const CART_STORAGE_KEY = "kadakchai-local-cart";

const CartContext = createContext<CartContextValue | null>(null);

function getInitialCart() {
  if (typeof window === "undefined") {
    return [] as CartLine[];
  }

  try {
    const rawValue = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!rawValue) {
      return [] as CartLine[];
    }

    const parsedValue = JSON.parse(rawValue) as CartLine[];

    if (!Array.isArray(parsedValue)) {
      return [] as CartLine[];
    }

    return parsedValue;
  } catch {
    return [] as CartLine[];
  }
}

export function CartProvider({ children }: PropsWithChildren) {
  const [lines, setLines] = useState<CartLine[]>(getInitialCart);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
  }, [lines]);

  const items = lines.flatMap((line) => {
    const product = findProduct(line.productSlug);

    if (!product) {
      return [];
    }

    const variant =
      product.variantOptions.find((candidate) => candidate.id === line.variantId) ??
      product.variantOptions[0];

    if (!variant) {
      return [];
    }

    return [
      {
        key: `${line.productSlug}-${line.variantId}`,
        product,
        quantity: line.quantity,
        variant,
      },
    ];
  });

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce(
    (total, item) => total + item.variant.price * item.quantity,
    0,
  );

  function addItem(product: Product, variant: ProductVariant, quantity = 1) {
    setLines((currentLines) => {
      const existingLine = currentLines.find(
        (line) => line.productSlug === product.slug && line.variantId === variant.id,
      );

      if (!existingLine) {
        return [
          ...currentLines,
          {
            productSlug: product.slug,
            quantity,
            variantId: variant.id,
          },
        ];
      }

      return currentLines.map((line) =>
        line.productSlug === product.slug && line.variantId === variant.id
          ? { ...line, quantity: line.quantity + quantity }
          : line,
      );
    });

    setIsOpen(true);
  }

  function updateQuantity(key: string, quantity: number) {
    if (quantity <= 0) {
      removeItem(key);
      return;
    }

    setLines((currentLines) =>
      currentLines.map((line) =>
        `${line.productSlug}-${line.variantId}` === key ? { ...line, quantity } : line,
      ),
    );
  }

  function removeItem(key: string) {
    setLines((currentLines) =>
      currentLines.filter((line) => `${line.productSlug}-${line.variantId}` !== key),
    );
  }

  function clearCart() {
    setLines([]);
    setIsOpen(false);
  }

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  function toggleCart() {
    setIsOpen((currentValue) => !currentValue);
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        clearCart,
        closeCart,
        isOpen,
        itemCount,
        items,
        openCart,
        removeItem,
        subtotal,
        toggleCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
