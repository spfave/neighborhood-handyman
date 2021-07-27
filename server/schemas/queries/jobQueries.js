const { Job } = require('../../models');

async function getJobs(parent, args, context) {
  if (!context.user)
    throw new AuthenticationError('You need to log in for access');

  const jobs = await Job.find({ user: { $ne: context.user._id } }).populate(
    'user'
  );
  return jobs;
}

async function getJob(parent, { jobID }, context) {
  if (!context.user)
    throw new AuthenticationError('You need to log in for access');

  const job = await Job.findById(jobID).populate('user');
  return job;
}

async function getAllJobs(parent, context) {
  if (!context.user)
    throw new AuthenticationError('You need to log in for access');

  const allJobs = await Job.find();
  return allJobs;
}
module.exports = { getJobs, getJob, getAllJobs };
