const { Job, Proposal } = require('../../models');

async function getUserJobs(parent, { userID }) {
  return await Job.find({ user: userID });
}

async function getUserProposals(parent, { userID }) {
  return await Proposal.find({ user: userID });
}

module.exports = { getUserJobs, getUserProposals };
