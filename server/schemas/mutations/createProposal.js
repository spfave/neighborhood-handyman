const { Proposal } = require('../../models');

async function createProposal(parent, { newProposal }) {
  const proposal = await Proposal.create(newProposal);
  const proposalPopulated = await Proposal.findById(proposal._id)
    .populate('user job')
    .populate({ path: 'job', populate: 'user' });

  return proposalPopulated;
}

module.exports = createProposal;
