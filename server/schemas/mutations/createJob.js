const { Job } = require('../../models');

async function createJob(parent, { newJob }) {
  const job = await Job.create(newJob);
  const jobPopulated = job.populate('user').execPopulate();

  return jobPopulated;
}

module.exports = createJob;
