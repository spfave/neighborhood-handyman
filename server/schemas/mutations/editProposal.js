const { Proposal } = require('../../models');

async function editProp(parent, { proposalId, updateProp}) {
  if (context.user) {
    const proposal = await Proposal.findOneAndUpdate({_id: proposalId}updateProp, {new: true});
  }
    return proposal;
  };

  module.exports = editProp;
