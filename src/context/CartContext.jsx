import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [total, setTotal] = useState(0);

 
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
    setTotal(newTotal);

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setTotal(0); 
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider
      value={{ cartItems, total, addToCart, increaseQty, decreaseQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
