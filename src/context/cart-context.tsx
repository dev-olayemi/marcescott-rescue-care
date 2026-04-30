import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/data/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  shippingMethod: "standard" | "express";
  setShippingMethod: (m: "standard" | "express") => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "pawswholesale.cart.v1";
const SHIP_KEY = "pawswholesale.ship.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [shippingMethod, setShippingMethod] = useState<"standard" | "express">("standard");

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
      const ship = localStorage.getItem(SHIP_KEY);
      if (ship === "express" || ship === "standard") setShippingMethod(ship);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(SHIP_KEY, shippingMethod);
  }, [shippingMethod]);

  const value = useMemo<CartContextValue>(() => {
    const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0);
    const itemCount = items.reduce((s, i) => s + i.quantity, 0);
    let shipping = 0;
    if (subtotal > 0) {
      if (shippingMethod === "express") shipping = 25;
      else shipping = subtotal >= 500 ? 0 : 35;
    }
    return {
      items,
      itemCount,
      subtotal,
      shipping,
      total: subtotal + shipping,
      shippingMethod,
      setShippingMethod,
      addItem: (product, quantity = product.moq) => {
        setItems((prev) => {
          const existing = prev.find((i) => i.product.id === product.id);
          const qty = Math.max(quantity, product.moq);
          if (existing) {
            return prev.map((i) =>
              i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i,
            );
          }
          return [...prev, { product, quantity: qty }];
        });
      },
      updateQuantity: (productId, quantity) => {
        setItems((prev) =>
          prev.map((i) =>
            i.product.id === productId
              ? { ...i, quantity: Math.max(quantity, i.product.moq) }
              : i,
          ),
        );
      },
      removeItem: (productId) => {
        setItems((prev) => prev.filter((i) => i.product.id !== productId));
      },
      clear: () => setItems([]),
    };
  }, [items, shippingMethod]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}
