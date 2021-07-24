// const getUser = require('./user');
const { getUser, getUserJobs, getUserProposals } = require('./userQueries');
const jobQueries = require('./jobQueries');
const getJobProposals = require('./getJobProposals');

module.exports = {
  getUser,
  getUserJobs,
  getUserProposals,
  ...jobQueries,
  getJobProposals,
};
