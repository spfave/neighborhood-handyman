const { Proposal } = require('../../models');

async function editProp(parent, { proposalID, updateProp }, context) {
  if (context.user) {
    const proposal = await Proposal.findOneAndUpdate(
      { _id: proposalID },
      updateProp,
      { new: true }
    );
    return proposal;
  }
}

module.exports = editProp;
