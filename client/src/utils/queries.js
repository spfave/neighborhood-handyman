import { gql } from '@apollo/client';

// export const QUERY_PROFILES = gql`
//   query allProfiles {
//     profiles {
//       _id
//       name
//     }
//   }
// `;

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

// export const QUERY_ME = gql`
//   query singleProfile {
//     getUser {
//       userType
//       firstName
//       lastName
//       email
//       city
//       reviews {
//         reviewText
//         reviewAuthor
//         createdAt
//       }
//     }
//   }
// `;

// Used in Dashboard
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

// Used in ManageJob
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

// Used in ManageJob
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

export const QUERY_JOB = gql`
  query getJob($jobID: ID!) {
    getJob(jobID: $jobID) {
      _id
      name
      description
      skills
      city
      needDate
      user {
        _id
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

// Used in Dashboard
export const QUERY_USER_PROPOSALS = gql`
  query userProposals {
    getUserProposals {
      _id
      name
      costEstimate
      startEstimate
      timeFrame
    }
  }
`;

<<<<<<< HEAD
export const CONTRACTOR_PROFILE = gql`
query contractorProfile {
    getUser {
      reviews {
        reviewText
        reviewAuthor
        createdAt
=======
// Used in ManageProposal
export const QUERY_USER_PROPOSAL = gql`
  query getProposal($proposalID: ID!) {
    getProposal(proposalID: $proposalID) {
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
>>>>>>> main
      }
    }
  }
`;
