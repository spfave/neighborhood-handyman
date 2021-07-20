// const queries = require('./queries');
const mutations = require('./mutations');

const resolvers = {
  Query: {
    // me:
    // jobs:
    // jobs: queries.jobs,
    // job:
    // proposals:
    // proposal:
  },

  Mutation: {
    signup: mutations.signup,
    login: mutations.login,
    // createJob:
    // createProposal:
  },
};

module.exports = resolvers;
