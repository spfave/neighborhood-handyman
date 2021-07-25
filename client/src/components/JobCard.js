import dateConverter from '../utils/dateConverter';

const JobCard = (props) => {
  const cards = props.jobs.map((job, index) => {
    return (
      <div className="card m-2 job-card" key={index}>
        <div className="card-header">{job.name}</div>
        <div className="card-body p-4">
          <h4>Requested Date</h4>
          <p>{job.needDate ? dateConverter(job.needDate) : 'none specified'}</p>
          <h4>Description</h4>
          <p>{job.description}</p>
          {job.skills.length === 0 ? (
            // Return nothing if the skills array is empty
            ''
          ) : (
            <ul>
              {job.skills.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    );
  });

  return cards;
};

export default JobCard;
