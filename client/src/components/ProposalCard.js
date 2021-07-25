import dateConverter from "../utils/dateConverter";

const ProposalCard = props => {
    const cards = props.proposals.map((proposal, index) => {
        return(
            <div className="card m-2 proposal-card" key={index}>
                <div className="card-header">{proposal.name}</div>
                <div className="card-body p-2">
                    <ul>
                        <li>
                            Estimated Cost: ${proposal.costEstimate}
                        </li>
                        <li>
                            Estimated Start Date: {dateConverter(proposal.startEstimate)}
                        </li>
                        <li>
                            Time Frame: {proposal.timeFrame}
                        </li>
                    </ul>
                </div>
            </div>
        )
    })

    return cards;
}

export default ProposalCard;