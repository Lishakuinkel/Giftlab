import React, { createContext, useContext, useState, useEffect } from 'react';

// Initialize new context for cart
const CartContext = createContext();

// Custom hook to provide usage of the cart context
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    for (const item of cart) {
      totalAmount += item.product.price * item.quantity;
    }
    setTotalAmount(totalAmount); 
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [cart]);

  // Function to add a cart
  const addToCart = (product) => {
    // Prevent adding blank entries
    if (!product.name) {
      return;
    }

    const tempCart = [...cart];
    // Check if the product is already in the cart
    const existingCartItem = tempCart.find((item) => item.product._id === product._id);

    if (existingCartItem) {
      // If the item already exists in the cart, update its quantity
      existingCartItem.quantity += 1;
    } else {
      // If the item doesn't exist, add it with a quantity of 1
      tempCart.push({
        product: product,
        quantity: 1,
      });
    }
    // Update the cart state with the modified tempCart array
    setCart(tempCart);
  };

  // Function to remove a cart
  const removeCart = (productId) => {
    // Clone the current cart array to avoid mutating state directly
    const tempCart = [...cart];
  
    // Find the item by its product ID in the tempCart
    const itemToRemove = tempCart.find((item) => item.product._id === productId);
  
    if (itemToRemove) {
      // Decrement the quantity of the item
      itemToRemove.quantity -= 1;
  
      // If the quantity becomes zero or less, remove it from the cart
      if (itemToRemove.quantity <= 0) {
        const indexToRemove = tempCart.findIndex(
          (item) => item.product._id === productId
        );
        if (indexToRemove !== -1) {
          tempCart.splice(indexToRemove, 1);
        }
      }
  
      // Update the cart state with the modified tempCart array
      setCart(tempCart);
    }
  };



  // The value prop expects an initial state object
  return (
    <CartContext.Provider
      value={{ cart, totalAmount, addToCart, removeCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
