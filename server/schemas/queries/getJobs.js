const { Job } = require('../../models');

async function getJobs(parent, { userID }) {
  return await Job.find({ user: { $ne: userID } }).populate('user');
}

module.exports = getJobs;
