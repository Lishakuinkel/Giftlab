import { gql } from '@apollo/client';

// query to get a list of all products
export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
      description
      price
      quantity
      image
      category {
        name
      }
    }
  }
`;

// query to get a product by id
export const GET_PRODUCT_BY_ID = gql`
  query getProductById($_id: ID) {
    product(_id: $_id) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;