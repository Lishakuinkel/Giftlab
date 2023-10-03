import React, { createContext, useContext, useState } from 'react';

// Initialize new context for cart
const CartContext = createContext();

// Custom hook to provide usage of the cart context
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add a cart
  const addToCart = (product) => {
    // Prevent adding blank entries
    if (!product.name) {
      return;
    }


    setCart([...cart, product]);
  };

  // Function to remove a cart
  const removeCart = (id) => {
    const newCartList = cart.filter((product) => product.id !== id);

    setCart(newCartList);
  };



  // The value prop expects an initial state object
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
