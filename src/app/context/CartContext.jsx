// src/context/CartContext.jsx

'use client'; // <--- ¡DEBE SER LA PRIMERA LÍNEA!

import React, { createContext, useContext, useState } from 'react';
// 1. Crea el Contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto fácilmente
export const useCart = () => useContext(CartContext);

// 2. Componente Proveedor
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto (o aumentar su cantidad)
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Si ya existe, aumenta solo la cantidad
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Si es nuevo, lo agrega con cantidad 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Función para eliminar un producto completamente
  const removeItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  // Función para aumentar la cantidad de un producto
  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Función para disminuir la cantidad de un producto
  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === productId) {
            // Si la cantidad es 1, se eliminará el producto
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0) // Filtra para eliminar si quantity es 0
    );
  };

  // 3. Valores y Funciones disponibles para toda la app
  const value = {
    cartItems,
    addToCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};