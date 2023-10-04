import React from 'react'
import { useCartContext } from '../../utils/cartContext';
import { useMutation } from '@apollo/client';
import "./cart.css";
// import Checkout from '../checkout/Checkout'

import { ADD_ORDER } from '../../utils/mutations';
import { useNavigate } from 'react-router-dom';


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
    <div>
      <h2 className='text-center py-8'>Your shopping cart</h2>
      <div>
        <ul>
          {cart.map((item) => (
            <li className="card" key={item.product._id}>
              {item.product.name} - Quantity: {item.quantity}
              <div>

                <p className="price">${item.product.price}</p>
              </div>
              <button onClick={() => removeCart(item.product._id)}>Remove</button>
              <button onClick={() => addToCart(item.product)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='text-center py-10'>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p> {/* Display the total amount */}
        <button className="checkout" onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;