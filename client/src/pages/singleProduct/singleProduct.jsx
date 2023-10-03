import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS, QUERY_PRODUCT_BY_ID } from "../../utils/queries";

import { useMemo } from "react";
function SingleProduct({filter}) {

  const { loading, data } = useQuery(QUERY_PRODUCT_BY_ID);

  

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
    {/* {product.name} */}
    </>
  );

  }

  export default SingleProduct;