//import React, { useState } from "react";
//import { Link } from 'react-router-dom';
//import { useMutation } from '@apollo/client';
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
//import { LOGIN_USER } from '../utils/mutations';
//import Auth from '../utils/auth';
//import "../assets/css/login.css"


// export default function Account() {
//     return (
//         <h2>My Account</h2>
//     )
// }

import React from "react";
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

//import SkillsList from '../components/SkillsList';
//import SkillForm from '../components/SkillForm';

import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Account = () => {
  const { profileId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    profileId ? QUERY_SINGLE_PROFILE : QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const profile = data?.me || data?.profile || {};

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
    return <Redirect to="/account" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile?.name) {
    return (
      <h4>
        Please log in to see your profile page.
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
        {profileId ? `${profile.name}'s` : 'Your'} f
      </h2>

      
      )

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        
      </div>
    </div>
  );
};

export default Account;
