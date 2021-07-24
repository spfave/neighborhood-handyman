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


