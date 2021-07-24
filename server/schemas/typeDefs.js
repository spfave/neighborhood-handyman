const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    city: String
    reviews: [Review]
  }

  input NewUserInput {
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

  type Job {
    name: String
    description: String
    skills: [String]
    city: String
    needDate: String
    user: User
  }

  input JobInput {
    name: String!
    description: String
    skills: [String]
    city: String
    needDate: String
    user: ID
  }

  type Proposal {
    name: String
    description: String
    costEstimate: Float
    startEstimate: String
    timeFrame: Int
    user: User
    job: Job
  }

  input ProposalInput {
    name: String
    description: String
    costEstimate: Float
    startEstimate: String
    timeFrame: Int
    user: ID
    job: ID
  }

  type Auth {
    token: ID!
  }

  type Query {
    getUser: User
    getUserJobs: [Job]
    getUserProposals: [Proposal]
    getJobs: [Job]
    getJobProposals(jobID: ID!): [Proposal]
  }

  type Mutation {
    addUser(newUser: NewUserInput!): Auth
    login(email: String!, password: String!): Auth
    createJob(newJob: JobInput!): Job
    createProposal(newProposal: ProposalInput!): Proposal
  }
`;

module.exports = typeDefs;
