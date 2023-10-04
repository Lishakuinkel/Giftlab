import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default behavior of refreshing the page

    navigate('/order-confirmation'); 
  }
 
  return (
    <div className='text-center'>
      <form onSubmit={handleSubmit}>
        <button className='bg-[#d7c2d8] rounded-md p-1'>Submit</button>
      </form>
    </div>
  )
}

export default Checkout