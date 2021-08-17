import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

import dateConverter from '../utils/dateConverter';
import { QUERY_USER_JOB, QUERY_USER_JOB_PROPOSALS } from '../utils/queries';
import { DELETE_JOB } from '../utils/mutations';

import '../assets/css/manageJob.css';

const ManageJob = () => {
  const { jobID } = useParams();

  const [deleteJob] = useMutation(DELETE_JOB);

  const removeJob = async () => {
    await deleteJob({
      variables: { jobId: jobID },
    });

    // Send user back to dashboard
    window.location.replace('/dashboard');
  };

  // Submit query for job
  const jobData = useQuery(QUERY_USER_JOB, {
    variables: { jobID: jobID },
  });

  // Submit query for corresponding proposals
  const proposalData = useQuery(QUERY_USER_JOB_PROPOSALS, {
    variables: { jobID: jobID },
  });

  if (jobData.loading) {
    return <div>Loading...</div>;
  }

  if (proposalData.loading) {
    return <div>Loading...</div>;
  }

  const job = jobData.data.getJob;

  let proposalCards;

  // Checking for proposals since job may not have a proposal
  if (proposalData.data.getJobProposals.length === 0) {
    proposalCards = <p>Awaiting proposals!</p>;
  } else {
    const proposals = proposalData.data.getJobProposals;

    proposalCards = proposals.map((proposal, index) => {
      return (
        <div className="card m-2 proposal-card" key={index}>
          <div className="card-header">
            {proposal.user.firstName} {proposal.user.lastName}
          </div>
          <div className="card-body p-2">
            {proposal.description && (
              <>
                  <h4>Description</h4>
                  <p>{proposal.description}</p>
              </>
            )}
            <ul>
              <li>Estimated Cost: ${proposal.costEstimate}</li>
              <li>
                Estimated Start Date: {dateConverter(proposal.startEstimate)}
              </li>
              <li>Time Frame: {proposal.timeFrame} days</li>
            </ul>
          </div>
        </div>
      );
    });
  }

  return (
    <section className="p-2 manage-job">
      <div className="card m-2 mb-4">
        <div className="card-header">{job.name}</div>
        <div className="card-body p-4">
          <h3>Requested Date of Completion</h3>
          <p>{job.needDate ? dateConverter(job.needDate) : 'None specified'}</p>
          <h3>Description</h3>
          <p>{job.description ? job.description : 'None provided'}</p>
          <h3>Location</h3>
          <p>{job.city}</p>
          {job.skills.length > 0 && (
            <>
              <h3>Skills Required</h3>
              <ul>
                {job.skills.map((skill, index) => {
                  return <li key={index}>{skill}</li>;
                })}
              </ul>
            </>
          )}
        </div>
        <Link to={`/job/${jobID}`} className="w-75 my-2 mx-auto">
          <Button className="w-100">
            Edit Job
          </Button>
        </Link>
        <Button
          onClick={removeJob}
          className="w-75 mb-4 mx-auto btn-danger"
        >
          Delete Job
        </Button>
      </div>

      <h2>Proposals</h2>
      {proposalCards}
    </section>
  );
};

export default ManageJob;
