const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
  Query: {
    // me:
    // jobs:
    // jobs: queries.getJobs,
    // job:
    // proposals:
    // proposal:
  },

  Mutation: {
    signup: mutations.signup,
    // login:
    // createJob:
    // createProposal:
  },
};

module.exports = resolvers;
