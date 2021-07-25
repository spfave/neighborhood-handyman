const { Job } = require('../../models');

async function editJob(parent, context, { jobId, updateJob }) {
  if (context.user) {
    const job = await Job.findOneAndUpdate({_id: jobId}, updateJob, {new: true});
  }
    return job;
  };

  module.exports = editJob;
