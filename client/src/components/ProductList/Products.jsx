import React, { useEffect } from "react";
//import ProductItem from '../ProductItem/ProductItem';
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Products.css";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//device responsive
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function ProductList({ filter }) {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  // const products = data?.products || [];

  const products = useMemo(() => {
    if (!data) {
      return [];
    }
    if (!data.products) {
      return [];
    }
    if (filter && filter.name) {
      return data.products.filter((product) =>
        product.name
          .toLocaleLowerCase()
          .includes(filter.name.toLocaleLowerCase())
      );
    }

    return data.products;
  }, [data, filter]);

  return (
    <div className="py-12">

      <Carousel responsive={responsive}>
        {products?.map((product, i) => {
          return (
            <div className="card">
              <img className="image" src={product.image} alt="image" />
              <h2><Link key={i} className="" to={`/product/${product._id}`}>
                {product.name}
              </Link></h2>
              <p className="price">${product.price}</p>
              <p>
                <button><ShoppingCart size={30} /> Add to Cart </button>
              </p>

            </div>
          )
        })}

      </Carousel>

    </div>
  );
}

export default ProductList;
