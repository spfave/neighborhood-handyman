import { gql } from '@apollo/client';

// Signup/Login
export const ADD_USER = gql`
  mutation addUser($newUser: NewUserInput!) {
    addUser(newUser: $newUser) {
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

// Job Mutations
export const ADD_JOB = gql`
  mutation createJob($newJob: JobInput!) {
    createJob(newJob: $newJob) {
      _id
      name
      description
      skills
      city
      needDate
    }
  }
`;

export const EDIT_JOB = gql`
  mutation editJob($jobID: ID!, $updateJob: JobInput!) {
    editJob(jobID: $jobID, updateJob: $updateJob) {
      _id
      name
      description
      skills
      city
      needDate
    }
  }
`;

export const DELETE_JOB = gql`
  mutation deleteJob($jobId: ID!) {
    deleteJob(jobId: $jobId) {
      name
    }
  }
`;

//  Proposal Mutations
export const ADD_PROPOSAL = gql`
  mutation createProposal($newProposal: ProposalInput!) {
    createProposal(newProposal: $newProposal) {
      _id
      name
      description
      costEstimate
      startEstimate
      timeFrame
    }
  }
`;

export const EDIT_PROPOSAL = gql`
  mutation editProposal($proposalID: ID!, $updateProp: ProposalInput!) {
    editProposal(proposalID: $proposalID, updateProp: $updateProp) {
      _id
      name
      description
      costEstimate
      startEstimate
      timeFrame
    }
  }
`;

export const DELETE_PROPOSAL = gql`
  mutation deleteProposal($proposalId: ID!) {
    deleteProposal(proposalId: $proposalId) {
      name
    }
  }
`;
