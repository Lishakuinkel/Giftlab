import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

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