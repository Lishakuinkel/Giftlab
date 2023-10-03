import React from 'react'
import { useCartContext } from '../../utils/cartContext';
import "./cart.css";

const Cart = () => {
  const { cart, totalAmount, addToCart, removeCart } = useCartContext();
  
  console.log("cart", cart);










  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li className="card" key={item.product._id}>
            {item.product.name} - Quantity: {item.quantity}
              <div>
              <p className="price">{item.product.price}</p>
              </div>
            <button onClick={() => removeCart(item.product._id)}>Remove</button>
            <button onClick={() => addToCart(item.product)}>Add One</button>
          </li>
        ))}
      </ul>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p> {/* Display the total amount */}
      <button className="checkout">Checkout</button>
    </div>
  );
};

//   return (
//     <div>
//       <h2>Your Shopping Cart</h2>
//       <ul>
//         {cart.map((product) => (
//           <li key={product.id} className="card">
//             <div className="cart">
//               <img className="image" src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
//             </div>
//             <div>
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//               <p className="price">{product.price}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <button className="checkout">Checkout</button>
//     </div>
//   );
// };

export default Cart;

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