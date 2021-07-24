const queries = require('./queries');
const mutations = require('./mutations');
const scalars = require('./scalars');

const resolvers = {
  Query: {
    getUser: queries.getUser,
    getUserJobs: queries.getUserJobs,
    getUserProposals: queries.getUserProposals,
    getJobs: queries.getJobs,
    getJob: queries.getJob,
    getJobProposals: queries.getJobProposals,
    getProposal: queries.getProposal,
  },

  Mutation: {
    addUser: mutations.addUser,
    login: mutations.login,
    createJob: mutations.createJob,
    createProposal: mutations.createProposal,
  },
  Date: scalars.dateScalar,
};

module.exports = resolvers;
