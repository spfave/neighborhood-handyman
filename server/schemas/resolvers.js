const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
  Query: {
    // me:
    jobs: queries.getJobs,
    // job:
    proposals: queries.getProposals,
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
