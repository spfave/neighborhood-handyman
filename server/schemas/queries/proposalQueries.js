const { Proposal } = require('../../models');

async function getJobProposals(parent, { jobID }, context) {
  if (!context.user)
    throw new AuthenticationError('You need to log in for access');

  const jobProposals = await Proposal.find({ job: jobID });
  return jobProposals;
}

async function getProposal(parent, { proposalID }, context) {
  if (!context.user)
    throw new AuthenticationError('You need to log in for access');

  const proposal = await Proposal.findById(proposalID)
    .populate('user job')
    .populate({ path: 'job', populate: 'user' });
  return proposal;
}

module.exports = { getJobProposals, getProposal };
