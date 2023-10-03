import { React, useEffect, useRef, useState } from 'react'
import { useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from '../../utils/queries';
import { useMemo } from "react";
import './CategoryMenu.css'

const CategoryMenu = ( { filter }) => {
  const { loading, data } = useQuery(QUERY_CATEGORIES);
  //const categoryList = data?.categories || []
  const [open, setOpen] = useState(false);

  const categories = useMemo(() => {
    if (!data) {
      return [];
    }
    if (!data.categories) {
      return [];
    }
    if (filter && filter.name) {
      return data.categories.filter((category) =>
        category.name
          .toLocaleLowerCase()
          .includes(filter.name.toLocaleLowerCase())
      );
    }

    return data.categories;
  }, [data, filter]);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    
    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
   
  function DropdownItem(category){
    return(
      <li className = 'dropdownItem'>
        <a> {category.text} </a>
      </li>
    );
  }

  return (
    <div className='categoryMenu'>
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <h2 className='menu-heading'>Menu</h2>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
         
          {categories?.map((category,i) => {
            return(
              <ul>
            <DropdownItem text = {category.name}/>
            </ul>
            )
          })}
          
        </div>
      </div>
    </div>
  )
}

export default CategoryMenu