import React, { useEffect } from "react";
//import ProductItem from '../ProductItem/ProductItem';
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { useMemo } from "react";

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

  console.log(products);

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {products?.map((product, i) => {
        return (
          <button key={i} className="">
            {product.name}
          </button>
        );
      })}
    </div>
  );
}

export default ProductList;
