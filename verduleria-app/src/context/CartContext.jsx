// src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (product) => {
    setCarrito((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCarrito((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalItems = carrito.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ carrito, addToCart, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
