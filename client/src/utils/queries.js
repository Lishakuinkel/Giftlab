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
export const GET_PRODUCTS_BY_ID = gql`
  query getProductsById($category: ID) {
    products(category: $category) {
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