const { Job } = require('../../models');

async function createJob(parent, { newJob }) {
    const job = await Job.create(newJob);
  
    return { job };
  }
  
  module.exports = createJob;