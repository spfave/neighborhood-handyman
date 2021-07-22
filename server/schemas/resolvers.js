const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
  Query: {
    // me:
    getJobs: queries.getJobs,
    // job:
    getJobProposals: queries.getJobProposals,
    // proposal:
  },

  Mutation: {
    signup: mutations.signup,
    login: mutations.login,
    createJob: mutations.createJob,
    createProposal: mutations.createProposal,
  },
};

module.exports = resolvers;
