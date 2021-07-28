import { Link } from "react-router-dom";
import dateConverter from "../utils/dateConverter";

const ProposalCard = props => {
    const cards = props.proposals.map((proposal, index) => {
        return(
            <Link to={`/manageProposal/${proposal._id}`} className="manage-link" key={index}>
                <div className="card my-2 proposal-card">
                    <div className="card-header">{proposal.name}</div>
                    <div className="card-body p-2">
                    {proposal.description ? (
                        <>
                        <h4>Description</h4>
                        <p>{proposal.description}</p>
                        </>
                    ) : (
                        // If no description, return nothing
                        ''
                    )}
                        <ul>
                            <li>
                                Estimated Cost: ${proposal.costEstimate}
                            </li>
                            <li>
                                Estimated Start Date: {dateConverter(proposal.startEstimate)}
                            </li>
                            <li>
                                Time Frame: {proposal.timeFrame} day(s)
                            </li>
                        </ul>
                    </div>
                </div>
            </Link>
        )
    })

    return cards;
}

export default ProposalCard;