const { Job } = require('../../models');

async function createJob(parent, { newJob }) {
  const job = await Job.create(newJob);
  const jobPopulated = await Job.findById(job._id).populate('user');

  return jobPopulated;
}

module.exports = createJob;
