import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem/ProductItem";
import { QUERY_PRODUCT_BY_ID } from "../../utils/queries";

const SingleProduct = () => {
  const { id } = useParams();
  console.log("typeof id: ", typeof id);

  const { loading, data } = useQuery(QUERY_PRODUCT_BY_ID, {
    // TODO: Convert id into an "ID" type for graphql
    variables: { id: id },
  });

  console.log("data: ", data);

  return (
    <>
      <div>
        <ProductItem />
      </div>
    </>
  );
};

export default SingleProduct;
