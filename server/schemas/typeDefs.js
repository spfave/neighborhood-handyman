const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    userType: String
    firstName: String
    lastName: String
    email: String
    password: String
    city: String
    reviews: [Review]
  }

  type Review {
    reviewText: String
    reviewAuthor: String
    createdAt: String
  }

  type Customer {
    _id: ID!
    name: String
    email: String
    password: String
    userType: String
  }

  type Auth {
    token: ID!
  }

  type Query {
    me: User
  }

  type Mutation {
    signup(
      userType: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      city: String!
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
