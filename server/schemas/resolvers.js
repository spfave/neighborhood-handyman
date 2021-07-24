const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
  Query: {
    getUser: queries.getUser,
    getUserJobs: queries.getUserJobs,
    getUserProposals: queries.getUserProposals,
    getJobs: queries.getJobs,
    getJob: queries.getJob,
    getJobProposals: queries.getJobProposals,
    // job:
    // proposals: queries.getProposals,
    // proposal:
  },

  Mutation: {
    addUser: mutations.addUser,
    login: mutations.login,
    createJob: mutations.createJob,
    createProposal: mutations.createProposal,
  },
};

module.exports = resolvers;
