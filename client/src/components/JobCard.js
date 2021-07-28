import { Link } from "react-router-dom";
import dateConverter from '../utils/dateConverter';

const JobCard = (props) => {
  const cards = props.jobs.map((job, index) => {
    return (
      <Link to={`/manageJob/${job._id}`} className="manage-link" key={index}>
        <div className="card my-3 job-card">
          <div className="card-header">{job.name}</div>
          <div className="card-body p-4">
            <h4>Requested Date</h4>
            <p>{job.needDate ? dateConverter(job.needDate) : 'None specified'}</p>
            <h4>Location</h4>
            <p>{job.city}</p>
            <h4>Description</h4>
            <p>{job.description ? job.description : 'None provided'}</p>
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
          </div>
        </div>
      </Link>
    );
  });

  return cards;
};

export default JobCard;
