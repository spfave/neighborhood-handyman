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

  input NewUserInput {
    userType: String
    firstName: String
    lastName: String
    email: String
    password: String
    city: String
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

  type Job {
    name: String
    jobCustomer: String
    description: String
    skills: [String]
    city: String
    needDate: Date
    createdDate: Date
  }

  type Proposal {
    name: String
    description: String
    costEstimate: Number
    startEstimate: Date
    timeFrame: String
  }

  type Auth {
    token: ID!
  }

  type Query {
    me: User
  }

  type Mutation {
    signup(newUser: NewUserInput!): Auth
    login(email: String!, password: String!): Auth
    createJob(newJob: NewJobInput!)
    createProposal(newProposal: NewProposalInput!)
  }
`;

module.exports = typeDefs;
