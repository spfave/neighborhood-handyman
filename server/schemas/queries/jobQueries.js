const { Job } = require('../../models');

async function getJobs(parent, args, context) {
  return await Job.find({ user: { $ne: context.user._id } }).populate('user');
}

async function getJob(parent, { jobID }) {
  return await Job.findById(jobID).populate('user');
}

module.exports = { getJobs, getJob };
