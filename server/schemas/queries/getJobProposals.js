const { Proposal } = require('../../models');

async function getJobProposals(parent, { jobID }) {
  return await Proposal.find({ job: jobID });
}

module.exports = getJobProposals;
