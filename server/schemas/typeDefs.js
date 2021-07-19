const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    name: String
    email: String
    password: String
    role: String
  }

  type Customer {
    _id: ID!
    name: String
    email: String
    password: String
    role: String
  }

  type Auth {
    token: ID!
  }

  type Query {
    me: User
  }

  type Mutation {
    signup(
      name: String!
      email: String!
      password: String!
      role: String!
    ): Auth
  }
`;

module.exports = typeDefs;
