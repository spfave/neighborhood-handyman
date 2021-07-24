const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    userType: String
    firstName: String
    lastName: String
    email: String
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
    description: String
    skills: [String]
    city: String
    needDate: String
    proposals: [Proposal]
    user: User
  }

  input JobInput {
    name: String
    jobCustomer: String
    description: String
    skills: [String]
    city: String
    needDate: String
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
  }

  type Auth {
    token: ID!
  }

  type Query {
    getUser: User
    getUserJobs(userID: ID!): [Job]
    getUserProposals(userID: ID!): [Proposal]
    getJobs(userID: ID!): [Job]
    getJobProposals(jobID: ID!): [Proposal]
  }

  type Mutation {
    addUser(newUser: NewUserInput!): Auth
    login(email: String!, password: String!): Auth
    createJob(newJob: JobInput!): Job
    createProposal(newProposal: ProposalInput!): Proposal
    deleteJob(jobId: ID!): Job
    deleteProposal(proposalId: ID!): Proposal
    editJob(updateJob: JobInput!): Job
    editProposal(updateProp: ProposalInput!): Proposal

  }
`;

module.exports = typeDefs;
