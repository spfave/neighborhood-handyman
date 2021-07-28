import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_JOBS } from '../utils/queries';
import dateConverter from '../utils/dateConverter';

export default function Listings() {
  const allJobs = useQuery(QUERY_ALL_JOBS);

  // let user;

  if (allJobs.loading) {
    return <div>Loading...</div>;
  }

  console.log(allJobs);

  const jobs = allJobs.data.getJobs;
  // const users = allJobs.data.getJobs.user;

  const cards = jobs.map((job, index) => {
    return (
      <div className="card my-2 mx-0 my-sm-3 mx-sm-5 job-card" key={job._id}>
        <div className="card-header">{job.name}</div>
        <div className="card-body p-4">
          <h4>User</h4>
          <p>
            {job.user.firstName} {job.user.lastName}
          </p>
          <h4>Requested Date</h4>
          <p>{job.needDate ? dateConverter(job.needDate) : 'None specified'}</p>
          <h4>Location</h4>
          <p>{job.city}</p>
          <h4>Description</h4>
          <p>{job.description ? job.description : 'None Specified'}</p>
          {job.skills.length === 0 ? (
            // Return nothing if the skills array is empty
            ''
          ) : (
            <>
              <h4>Skills Needed</h4>
              <ul>
                {job.skills.map((skill, index) => {
                  return <li key={index}>{skill}</li>;
                })}
              </ul>
            </>
          )}
          <Link to={`/createProposal/${job._id}`}>
            <Button>Submit Proposal</Button>
          </Link>
          {/* <Button>Submit Proposal</Button> */}
        </div>
      </div>
    );
  });

  return cards;
}
