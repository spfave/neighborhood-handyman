const { Proposal } = require('../../models');


async function deleteProp (parent, { proposalId }) {
    if (context.user) {
        const proposal = await Proposal.findByIdAndDelete({
            _id: proposalId,
        });
    return proposal     
    }
};

module.exports = deleteProp;