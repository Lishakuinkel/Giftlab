import React from 'react'
import { useCartContext } from '../../utils/cartContext';
import { useMutation } from '@apollo/client';
import "./cart.css";
// import Checkout from '../checkout/Checkout'

import { ADD_ORDER } from '../../utils/mutations';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, totalAmount, addToCart, removeCart } = useCartContext();
  
  const [addOrder] = useMutation(ADD_ORDER);
  const navigate = useNavigate();

  console.log("cart", cart);

  const checkout = async () => {
    try {
      const productsIds = cart.map((item) => item.product._id)
      console.log("productsIds:", productsIds);
      console.log("totalAmount:", totalAmount);
      const { data } = await addOrder({
        variables: { products: productsIds, total_price: totalAmount }

      })

      navigate("/checkout")
      console.log('graphql response:', data);
    } catch (error) {
      console.log('graphql error:', error);
    }
  }

return (
    <div className="cart-container">
      <h2 className="cart-header">Your Shopping Cart</h2>
      {/* Check if the cart is empty and render a message */}
      {cart.length === 0 ? (
        <>
          <p className='font-sans text-[#c77783] text-2xl'>Your cart is empty!
            <span className="ml-2">
            <span className="inline-block align-middle mr-2" role="img" aria-label="Pointer Finger">👉</span>
              <a href="/"><button className='bg-[#d7c2d8] rounded-md p-1'>Click to Start Shopping!</button></a>
            </span>
          </p>
        </>
      ) : (
        <>
      <div className="cart-items-container"> 
        <table className="cart-table">
          <thead>
            <tr>
              <th><Link to="/">Continue Shopping</Link></th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr className="cart-item" key={item.product._id}>
                <td>
                <img className="image" src={item.product.image} alt="image" />
                </td>
                <td className="cart-item-description">{item.product.name}</td>
                <td className="cart-item-price">${item.product.price}</td>
                <td className="cart-item-quantity">
                  <div className="cart-item-quantity-buttons">
                    <button onClick={() => removeCart(item.product._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => addToCart(item.product)}>+</button>
                  </div>
                </td>
                <td className="cart-item-total">${(item.product.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="cart-total-container"> 
        <p className="cart-total">SUBTOTAL: ${totalAmount.toFixed(2)}</p>
        <button className="checkout" onClick={checkout}>PROCEED TO CHECKOUT</button>
      </div>
      </>
      )}
    </div>
  );
};

export default Cart;