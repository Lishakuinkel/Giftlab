import React, { useEffect } from 'react';
//import ProductItem from '../ProductItem/ProductItem';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';

function ProductList() {
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const ProductList = data?.products || [];

  console.log(ProductList);

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {
        ProductList?.map((product, i) => {
          return (
            <button key={i} className=''>{product.name}</button>
          )
        })
      }
    </div>
  )
}

export default ProductList;
