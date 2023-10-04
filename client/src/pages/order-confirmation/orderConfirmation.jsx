import React from 'react';

const orderConfirmation = () => {
  return (
    <div className='text-center'>

      <h1 className='font-bold uppercase font-style: italic font-serif py-20 text-center text-[#915b64] text-3xl '>Thank you ♥</h1>

      <div>
        <p className='font-sans  text-[#c77783] text-2xl'>Your order has been placed!</p>

        <p className='font-sans font-style: italic py-20 text-gray-600'>Forgot something? <a href="/"><button className='bg-[#d7c2d8] rounded-md p-1'>Click here</button></a></p>

      </div>
    </div>
  )
}

export default orderConfirmation;