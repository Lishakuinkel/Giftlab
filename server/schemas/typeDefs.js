const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

type Category {
  _id: ID
  name: String

  image: String
  product:

}

type Product {
  _id: ID
  name: String
  description: String
  image: String
  quantity: Int
  price: Float
  category: Category
}

input ProductInput {
  _id: ID
  purchaseQuantity: Int
  name: String
  image: String
  price: Float
  quantity: Int
}

type Order {
  _id: ID
  purchaseDate: String
  products: [Product]
  total_price: Int
  user: String
}

type Checkout {
  session: ID
}

type Query {
  categories: [Category]
  products(category: ID, name: String): [Product]
  product(_id: ID!): Product
  user: User
  order(_id: ID!): Order
  checkout(products: [ProductInput]): Checkout
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  addOrder(products: [ID]!): Order
  updateUser(username: String, email: String, password: String): User
  updateProduct(_id: ID!, quantity: Int!): Product
  login(email: String!, password: String!): Auth
}
`;

  module.exports = typeDefs;