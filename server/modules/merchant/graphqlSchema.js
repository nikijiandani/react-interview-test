const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Merchant {
    index: Int
    guid: String
    logo: String
    dateCreated: String
    publishedState: Boolean
    brands: [String]
    merchant: String
    products: [Product]
    commissionFee: String
    contactEmail: String
    phone: String
    address: String
    publishedDate: String
    publishedBy: User
    companyDescription: String
  }
  type Product {
    belongsToBrand: Int
    id: String
    name: String
    price: Float
    description: String
    color: String
    size: String
    quantity: Int
    image: String
  }
  type User {
    userId: String
  }
  input OrderInput {
    id: String!
    quantity: Int!
  }
  type AddToCartResponse {
    success: Boolean!
    message: String!
    totalNumberOfCartItems: Int!
  }
  type Query {
    merchants: [Merchant!]!
  }
  type Mutation {
    editMerchant(publishedState: Boolean!): Merchant
    addToCart(product: OrderInput!): AddToCartResponse
  }
`;

module.exports = typeDefs;