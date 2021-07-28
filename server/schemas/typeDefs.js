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
    _id: ID
    name: String
    description: String
    skills: [String]
    city: String
    needDate: String
    user: User
    status: String
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
    _id: ID
    name: String
    description: String
    costEstimate: Float
    startEstimate: String
    timeFrame: Int
    user: User
    job: Job
    status: String
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
    editJob(jobID: ID!, updateJob: JobInput!): Job
    editProposal(proposalID: ID!, updateProp: ProposalInput!): Proposal
  }
`;

module.exports = typeDefs;
