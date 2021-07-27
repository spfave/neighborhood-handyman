const { Job } = require('../../models');

async function editJob(parent, { jobID, updateJob }, context) {
  if (context.user) {
    const job = await Job.findOneAndUpdate({ _id: jobID }, updateJob, {
      new: true,
    });
    return job;
  }
}

module.exports = editJob;
