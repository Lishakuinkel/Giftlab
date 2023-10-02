import React, { useEffect } from "react";
//import ProductItem from '../ProductItem/ProductItem';
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { useMemo } from "react";
import { Link } from "react-router-dom";

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
    <div className="my-2">
      <h2>Our Products:</h2>
      {products?.map((product, i) => {
        return (
          <Link key={i} className="" to={`/product/${product._id}`}>
            {product.name}
          </Link>
        );
      })}
    </div>
  );
}

export default ProductList;
