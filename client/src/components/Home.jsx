import React from 'react';
import Products from './ProductList/Products'
import CategoryMenu from './CategoryMenu/CategoryMenu';

const Home = () => {
  return (
    
    <div> 
      <p>Homepage</p>
      <CategoryMenu />
      <Products />
    </div>
  )
}

export default Home