// Import packages
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// Import components
import JobCard from '../components/JobCard';
import ProposalCard from '../components/ProposalCard';
import Auth from '../utils/auth';

// Import queries
import { QUERY_USER_JOBS, QUERY_USER_PROPOSALS } from '../utils/queries';

// Import CSS
import '../assets/css/dashboard.css';

export default function Dashboard() {
  const userJobs = useQuery(QUERY_USER_JOBS);
  const userProposals = useQuery(QUERY_USER_PROPOSALS);

  if (userJobs.loading) {
    return <div>Loading...</div>;
  }

  if (userProposals.loading) {
    return <div>Loading...</div>;
  }

  console.log(userJobs.data.getUserJobs);
  console.log(userProposals.data.getUserProposals);

  const user = Auth.getUser();
  const userName = `${user.data.firstName} ${user.data.lastName}`;

  return (
    <section className="container">
      <h2>{userName} Dashboard</h2>
      <div className="row">
        {/* Your projects column */}
        <div className="col-md-6">
          <h3>Your Jobs</h3>
          {/* Set up route */}
          <Link className="btn btn-success" to="/createJob">
            <strong>Create New Job</strong>
          </Link>
          {/* <button>Request Help</button> */}
          {
            // Since empty array doesn't  evaluate to falsy in JavaScript
            userJobs.data.getUserJobs.length === 0 ? (
              <p>Awaiting your first job!</p>
            ) : (
              <JobCard jobs={userJobs.data.getUserJobs} />
            )
          }
        </div>

        {/* Your proposals column */}
        <div className="col-md-6">
          <h3>Your Proposals</h3>
          {
            // Since empty array doesn't evaluate to falsy in JavaScript
            userProposals.data.getUserProposals.length === 0 ? (
              <p>Awaiting your first proposal!</p>
            ) : (
              <ProposalCard proposals={userProposals.data.getUserProposals} />
            )
          }
        </div>
      </div>
    </section>
  );
}
