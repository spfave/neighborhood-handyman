const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
  Query: {
    getUser: queries.getUser,
    getUserJobs: queries.getUserJobs,
    getUserProposals: queries.getUserProposals,
    getJobs: queries.getJobs,
    // job:
    getJobProposals: queries.getJobProposals,
    // jobs: queries.getJobs,
    // job:
    // proposals: queries.getProposals,
    // proposal:
  },

  Mutation: {
    addUser: mutations.addUser,
    login: mutations.login,
    createJob: mutations.createJob,
    createProposal: mutations.createProposal,
    deleteJob: mutations.deleteJob,
    editJob: mutations.editJob,
  },
};

module.exports = resolvers;
