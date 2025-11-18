'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Añadir producto
  const addToCart = useCallback((product) => {
    // Convertimos "precio" a "price" si existe
    const fixedProduct = {
      ...product,
      price: product.price || product.precio || 0, 
    };

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === fixedProduct.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === fixedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...fixedProduct, quantity: 1 }];
    });

    setIsCartOpen(true);
  }, []);

  // Cambiar cantidad
  const updateQuantity = useCallback((productId, newQuantity) => {
    if (newQuantity < 1 || isNaN(newQuantity)) return;

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }, []);

  // Eliminar producto
  const removeItem = useCallback((productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, []);

  // Total (ya funciona porque todos tendrán price)
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeItem,
        total,
        isCartOpen,
        setIsCartOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
// Hook para acceder fácil
export function useCart() {
  return useContext(CartContext);
}


