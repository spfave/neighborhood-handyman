import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import Button from 'react-bootstrap/Button';

import dateConverter from '../utils/dateConverter';
import { QUERY_USER_PROPOSAL } from '../utils/queries';
import { DELETE_PROPOSAL } from '../utils/mutations';

import '../assets/css/manageProposal.css';

const ManageProposal = () => {
  const { proposalID } = useParams();

  console.log(proposalID);

  const [deleteProposal] = useMutation(DELETE_PROPOSAL);

  const removeProposal = async () => {
    await deleteProposal({
      variables: { proposalId: proposalID },
    });

    // Send user back to dashboard
    window.location.replace('/dashboard');
  };

  const { data, loading } = useQuery(QUERY_USER_PROPOSAL, {
    variables: { proposalID: proposalID },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  // Simplifying variables
  const proposal = data.getProposal;
  const job = data.getProposal.job;
  const jobUserName = `${job.user.firstName} ${job.user.lastName}`;

  return (
    <section className="p-2 manage-proposal">
      <div className="card m-2 mb-4">
        <div className="card-header">Proposal for "{job.name}"</div>
        <div className="card-body p-4">
          {proposal.description && (
            <>
              <h3>Description</h3>
              <p>{proposal.description}</p>
            </>
          )}
          <ul>
            <li>Estimated Cost: ${proposal.costEstimate}</li>
            <li>
              Estimated Start Date: {dateConverter(proposal.startEstimate)}
            </li>
            <li>Time Frame: {proposal.timeFrame} day(s)</li>
          </ul>
        </div>
        <Link to={`/proposal/${proposalID}`} className="w-75 my-2 mx-auto">
          <Button className="w-100">
            Edit Proposal
          </Button>
        </Link>
        <Button
          onClick={removeProposal}
          className="w-75 mb-4 mx-auto btn-danger"
        >
          Delete Proposal
        </Button>
      </div>

      <h2>Job Details</h2>
      <div className="card">
        <div className="card-header">{job.name}</div>
        <div className="card-body p-4">
          <h3>User</h3>
          <p>{jobUserName}</p>
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
      </div>
    </section>
  );
};

export default ManageProposal;
