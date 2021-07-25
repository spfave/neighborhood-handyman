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