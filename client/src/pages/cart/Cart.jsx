import React from 'react'

const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart

// import React, { useState } from 'react';

// const Cart = () => {
//   // Initialize cart state as an empty array
//   const [cart, setCart] = useState([]);

//   // Function to add a product to the cart
//   const addToCart = (product) => {
//     // Check if the product is already in the cart
//     const productInCart = cart.find((item) => item.id === product.id);

//     if (productInCart) {
//       // If the product is in the cart, update its quantity
//       const updatedCart = cart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCart(updatedCart);
//     } else {
//       // If the product is not in the cart, add it with a quantity of 1
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   return (
//     <div>
//       <h2>Your Shopping Cart</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//       <button onClick={() => addToCart()}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Cart;