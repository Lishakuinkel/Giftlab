import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';


function CategoryMenu() {
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  const categoryList = data?.categories || []
 
  return (
    <div>
      <h2>Choose a Category:</h2>
      
      { categoryList?.map((category,i)=> {
        return (
          <button key={i}>{category.name}</button>
        )
      })      }
    </div>
  );
}

export default CategoryMenu;