import { createContext, useContext, useMemo, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast({ id: Date.now(), message });
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), 2600);
  }, []);

  const addToCart = useCallback((product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) return prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + qty } : item));
      return [...prev, { ...product, qty }];
    });
    showToast(`${product.name} added to cart`);
  }, [showToast]);

  const removeFromCart = useCallback((id) => setCart((prev) => prev.filter((item) => item.id !== id)), []);
  const updateQty = useCallback((id, qty) => setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty: Math.max(1, qty) } : item))), []);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.qty, 0), [cart]);
  const cartTotal = useMemo(() => cart.reduce((sum, item) => sum + item.qty * item.price, 0), [cart]);

  const value = { cart, addToCart, removeFromCart, updateQty, cartCount, cartTotal, toast, showToast };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
};
