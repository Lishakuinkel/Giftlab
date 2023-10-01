import React from 'react';
import Typed from 'react-typed';
import { Gift } from 'phosphor-react';
import Searchbar from './searchbar';


//import Products from '../../components/ProductList/Products'
import CategoryMenu from '../../components/CategoryMenu/CategoryMenu';

const Home = () => {
  return (
    
    <div className='bg-[#eaeadb] w-full h-screen text-center'> 
    <Searchbar />
      <div className='py-2 items-center text-center'>
     
      <Typed className='font-bold font-style: italic font-serif text-[#c77783] drop-shadow-lg ' strings={['Where thoughtful gifts come to life...']} typeSpeed={80} backSpeed={100} loop />
      </div>
      <div>
       <CategoryMenu /> 
      </div>
    </div>
  )
}

export default Home 