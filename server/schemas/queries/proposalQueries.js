const { Proposal } = require('../../models');

async function getJobProposals(parent, { jobID }) {
  return await Proposal.find({ job: jobID });
}

async function getProposal(parent, { proposalID }) {
  return await Proposal.findById(proposalID)
    .populate('user job')
    .populate({ path: 'job', populate: 'user' });
}

module.exports = { getJobProposals, getProposal };
