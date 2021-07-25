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

export const QUERY_JOB = gql`
  query getJob($user: ID) {
    job {
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
    }
  }
`;

export const QUERY_ALL_JOBS = gql`
  {
    job {
      name
      description
      skills
      city
      needDate
      createdDate
      user {
        name
      }
    }
  }
`;
