import { gql } from '@apollo/client';


export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
    }
  }
`;

//This is the section I'm working in
export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
    }
  }
`;


export const QUERY_USER_JOBS = gql`
  query userJobs($userID: ID!) {
    getUserJobs(userID: $userID) {
      name
      description
      skills
      city
      needDate
      createdDate
      reviews
    }
  }
`;

export const QUERY_USER_PROPOSALS = gql`
  query userProposals($userID: ID!) {
    getUserProposals(userID: $userID) {
      name
      description
      costEstimate
      startEstimate
      timeFrame
      user
      job
    }
  }
`;