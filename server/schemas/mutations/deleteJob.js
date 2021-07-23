const { Job, User } = require('../../models');


async function deleteJob (parent, { jobId }) {
    if (context.user) {
        const job = await Job.findByIdAndDelete({
            _id: jobId,
        });
    return job     
    }
    throw new AuthenticationError('You need to be logged in!');
};

module.exports = deleteJob;