const { Job, Proposal } = require('../../models');

async function getUserJobs(parent, { userID }, context) {
  if (!context.user)
    throw new AuthenticationError('You need to be logged in for access');

  return await Job.find({ user: userID });
}

async function getUserProposals(parent, { userID }, context) {
  if (!context.user)
    throw new AuthenticationError('You need to be logged in for access');

  return await Proposal.find({ user: userID });
}

module.exports = { getUserJobs, getUserProposals };
