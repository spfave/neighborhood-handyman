import { Link } from 'react-router-dom';

import { Button, Card } from 'react-bootstrap';
import dateFormat from 'dateformat';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { QUERY_ALL_JOBS } from '../utils/queries';
import Auth from '../utils/auth';
import JobCard from '../components/JobCard';

export default function Listings() {
  const allJobs = useQuery(QUERY_ALL_JOBS);

  // let user;

  if (allJobs.loading) {
    return <div>Loading...</div>;
  }

  console.log(allJobs);

  const user = Auth.getUser();

  return (
    <>
      <h1></h1>
    </>
  );
}
