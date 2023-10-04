import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default behavior of refreshing the page

    navigate('/order-confirmation'); 
  }
 
  return (
    <div class="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
    <div class="px-6 py-4 bg-[#42655c] text-white">
        <h1 class="text-lg font-bold">Pay with Credit Card</h1>
    </div>
    <div class="px-6 py-4">

        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="card-number">
                Card Number
            </label>
            <input
                class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="card-number" type="text" placeholder="**** **** **** ****" required />
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="expiration-date">
                Expiration Date
            </label>
            <input
                class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="expiration-date" type="text" placeholder="MM/YY" required/>
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="cvv">
                CVV
            </label>
            <input
                class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="cvv" type="text" placeholder="***" required/>
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="cvv">
                Cardholder Name
            </label>
            <input
                class="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Full Name" required />
        </div>

        <button class="bg-gray-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>
            Pay Now
        </button>
    </div>
</div>
  )
}

export default Checkout