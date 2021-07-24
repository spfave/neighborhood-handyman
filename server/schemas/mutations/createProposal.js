const { Proposal } = require('../../models');

async function createProposal(parent, { newProposal }) {
  const proposal = await Proposal.create(newProposal);
  const proposalPopulated = await proposal
    .populate('user job')
    .populate({ path: 'job', populate: 'user' })
    .execPopulate();

  return proposalPopulated;
}

module.exports = createProposal;
