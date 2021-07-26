import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
    }
  }
`;

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

export const QUERY_ME = gql`
query singleProfile {
    getUser {
      userType
      firstName
      lastName
      email
      city
      reviews {
        reviewText
        reviewAuthor
        createdAt
      }
    }
  }
`;


export const QUERY_USER_JOBS = gql`
  query userJobs {
    getUserJobs {
      name
      description
      skills
      city
      needDate
    }
  }
`;

export const QUERY_JOB = gql`
  query getJob($user: ID, $proposal: ID) {
    job(user: $user, proposal: $proposal) {
      _id
      name
      description
      skills
      city
      needDate
      createdDate
      user {
        _id
      }
      proposal {
        name
      }
    }
  }
`;

export const QUERY_ALL_JOBS = gql`
  query getJobs($user: ID, $proposal: ID) {
    job(user: $user, proposal: $proposal) {
      name
      description
      skills
      city
      needDate
      createdDate
      user {
        name
      }
      proposal {
        proposal
      }
    }
  }
`;

// export const QUERY_ALL_PROPOSALS = gql`

// `;

// export const QUERY_PROPOSAL = gql`

// `;

export const QUERY_USER_PROPOSALS = gql`
  query userProposals {
    getUserProposals {
      name
      costEstimate
      startEstimate
      timeFrame
    }
  }
`;
