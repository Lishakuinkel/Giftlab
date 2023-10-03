import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { QUERY_PRODUCT_BY_ID } from "../../utils/queries";

const SingleProduct = () => {
  const { id } = useParams();
  console.log("typeof id: ", typeof id);

  const { loading, data } = useQuery(QUERY_PRODUCT_BY_ID, {
    variables: { id: id },
  });

  console.log("data: ", data);

  return (
    <>
      <div></div>
    </>
  );
};

export default SingleProduct;
