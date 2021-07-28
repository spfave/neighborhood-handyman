import { gql } from '@apollo/client';

// Dashboard
export const QUERY_USER_JOBS = gql`
  query userJobs {
    getUserJobs {
      _id
      name
      description
      skills
      city
      needDate
    }
  }
`;

export const QUERY_USER_PROPOSALS = gql`
  query userProposals {
    getUserProposals {
      _id
      name
      description
      costEstimate
      startEstimate
      timeFrame
    }
  }
`;

// Manage Job
export const QUERY_USER_JOB = gql`
  query getJob($jobID: ID!) {
    getJob(jobID: $jobID) {
      name
      description
      skills
      city
      needDate
    }
  }
`;

export const QUERY_USER_JOB_PROPOSALS = gql`
  query getJobProposals($jobID: ID!) {
    getJobProposals(jobID: $jobID) {
      name
      description
      costEstimate
      startEstimate
      timeFrame
      user {
        firstName
        lastName
      }
    }
  }
`;

// Manage Proposal
export const QUERY_USER_PROPOSAL = gql`
  query getProposal($proposalID: ID!) {
    getProposal(proposalID: $proposalID) {
      name
      description
      costEstimate
      startEstimate
      timeFrame
      job {
        _id
        name
        description
        skills
        city
        needDate
        user {
          firstName
          lastName
        }
      }
    }
  }
`;

// Job Listings
export const QUERY_ALL_JOBS = gql`
  query getJobs {
    getJobs {
      _id
      name
      description
      skills
      city
      needDate
      user {
        firstName
        lastName
      }
    }
  }
`;

// Account
export const QUERY_USER = gql`
  query getUser {
    getUser {
      firstName
      lastName
      email
      city
    }
  }
`;
