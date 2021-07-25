const { Job } = require('../../models');


async function deleteJob (parent, { jobId }, context) {
    if (context.user) {
        const job = await Job.findByIdAndDelete({
            _id: jobId,
        });
    return job     
    }
};

module.exports = deleteJob;