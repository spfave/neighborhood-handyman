import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import Button from "react-bootstrap/button";

import dateConverter from "../utils/dateConverter";
import { QUERY_USER_JOB, QUERY_USER_JOB_PROPOSALS } from "../utils/queries";
import { DELETE_JOB } from "../utils/mutations";

import "../assets/css/manageJob.css";

const ManageJob = () => {

    const { jobID } = useParams();

    const [deleteJob, { error, data }] = useMutation(DELETE_JOB);

    const removeJob = async () => {
        await deleteJob(
            {
                variables: { jobId: jobID }
            }
        )

        // Send user back to dashboard
        window.location.replace("/dashboard");
    }

    // Submit query for job
    const jobData = useQuery(
        QUERY_USER_JOB,
        {
            variables: { jobID: jobID }
        }
    );

    // Submit query for corresponding proposals
    const proposalData = useQuery(
        QUERY_USER_JOB_PROPOSALS,
        {
            variables: { jobID: jobID }
        }
    )

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
                    <div className="card-header">{proposal.user.firstName} {proposal.user.lastName}</div>
                    <div className="card-body p-2">
                        <ul>
                            <li>
                                Estimated Cost: ${proposal.costEstimate}
                            </li>
                            <li>
                                Estimated Start Date: {dateConverter(proposal.startEstimate)}
                            </li>
                            <li>
                                Time Frame: {proposal.timeFrame} days
                            </li>
                        </ul>
                    </div>
                </div>
            );
        })
    }

    return (
        <section className="p-2">
            <div className="card m-2">
                <div className="card-header">{job.name}</div>
                <div className="card-body p-4">
                <h3>Requested Date of Completion</h3>
                <p>{dateConverter(job.needDate)}</p>
                <h3>Description</h3>
                <p>{job.description}</p>
                <h3>Location</h3>
                <p>{job.city}</p>
                {
                    job.skills.length ? 
                        <>
                            <h3>Skills Required</h3>
                            <ul>
                                { job.skills.map((skill, index) => {
                                    return (
                                        <li key={index}>
                                            {skill}
                                        </li>
                                    )
                                }) }
                            </ul>
                        </> :
                        // If skills array is empty, return nothing
                        "" 
                }
                </div>
                <Link to={`/job/${jobID}`}>
                    <Button className="w-75 d-flex justify-content-center m-2">Edit Job</Button>
                </Link>
                <Button onClick={removeJob} className="w-75 d-flex justify-content-center mx-2 mb-2">Delete Job</Button>
            </div>

            <h2>Proposals</h2>
            {proposalCards}
        </section>
        
    );
}

export default ManageJob;