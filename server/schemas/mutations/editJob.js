const Job = require('../../models');

async function editJob(parent, { updateJob}) {
    const job = await Job.findOneAndUpdate(updateJob);
  
    return { job };
  };

  module.exports = editJob;
