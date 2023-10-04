import React from "react";
import { useParams } from "react-router-dom";
import { QUERY_PRODUCT_BY_ID } from "../../utils/queries";

import { useMemo } from "react";
function SingleProduct({filter}) {

  const { loading, data } = useQuery(QUERY_PRODUCT_BY_ID, {
    variables: { id: id },
  });

  

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
    <>
      <div></div>
    </>
  );

  }

  export default SingleProduct;