const { gql } = require('apollo-server-express');

const typeDefs = gql`
  scalar Date

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
    createdAt: Date
  }

  type Job {
    _id: ID
    name: String
    description: String
    skills: [String]
    city: String
    needDate: Date
    user: User
  }

  input JobInput {
    name: String!
    description: String
    skills: [String]
    city: String
    needDate: Date
    user: ID
  }

  type Proposal {
    _id: ID
    name: String
    description: String
    costEstimate: Float
    startEstimate: Date
    timeFrame: Int
    user: User
    job: Job
  }

  input ProposalInput {
    name: String
    description: String
    costEstimate: Float
    startEstimate: Date
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
    getJob(jobID: ID!): Job
    getJobProposals(jobID: ID!): [Proposal]
    getProposal(proposalID: ID!): Proposal
  }

  type Mutation {
    addUser(newUser: NewUserInput!): Auth
    login(email: String!, password: String!): Auth
    createJob(newJob: JobInput!): Job
    createProposal(newProposal: ProposalInput!): Proposal
    deleteJob(jobId: ID!): Job
    deleteProposal(proposalId: ID!): Proposal
    editJob(updateJob: JobInput!, jobId: ID!): Job
    editProposal(updateProp: ProposalInput!, proposalId: ID!): Proposal
  }
`;

module.exports = typeDefs;
