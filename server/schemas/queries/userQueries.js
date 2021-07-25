const { AuthenticationError } = require('apollo-server-express');
const { User, Job, Proposal } = require('../../models');

async function getUser(parent, args, context) {
  if (!context.user) throw new AuthenticationError('You need to log in');

  const user = await User.findById(context.user._id);
  return user;
}

async function getUserJobs(parent, args, context) {
  if (!context.user) throw new AuthenticationError('You need to be logged in for access');

  return await Job.find({ user: context.user._id }).populate('user');
}

async function getUserProposals(parent, args, context) {
  if (!context.user)
    throw new AuthenticationError('You need to be logged in for access');

  return await Proposal.find({ user: context.user._id })
    .populate('user job')
    .populate({ path: 'job', populate: 'user' });
}

module.exports = { getUser, getUserJobs, getUserProposals };
