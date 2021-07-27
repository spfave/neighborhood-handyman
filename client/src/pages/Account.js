import { useQuery } from '@apollo/client';

import { QUERY_USER } from '../utils/queries';

import "../assets/css/account.css";

const Account = () => {
  const { data, loading } = useQuery(QUERY_USER);

  if (loading) {
    return <div>Loading...</div>
  }

<<<<<<< HEAD
  return (
    <div>
      <h2 className="card-header">
        {profileId ? `${profile.name}'s` : 'Your Profile page'}
      </h2>
      )
=======
  // Simplify variables
  const user = data.getUser;
>>>>>>> 98fa4f2609c4232ff2b4dcf90cd8ecdfd8621da7

  return (
    <section className="account m-2 container">
      <div className="row">
        <div className="col-sm-6">
          <h3>First Name</h3>
          <p>{user.firstName}</p>
          <h3>Last Name</h3>
          <p>{user.lastName}</p>
        </div>
        <div className="col-sm-6">
          <h3>Email</h3>
          <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
          <h3>City</h3>
          <p>{user.city}</p>
        </div>
      </div>
    </section>
  )
}

export default Account;
