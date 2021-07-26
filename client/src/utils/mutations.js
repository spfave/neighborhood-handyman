import { gql } from '@apollo/client';

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

export const DELETE_JOB = gql`
  mutation deleteJob($jobId: ID!) {
    deleteJob(jobId: $jobId) {
      name
    }
  }
`;

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
