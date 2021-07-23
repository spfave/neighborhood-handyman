const getUser = require('./user');
const { getUserJobs, getUserProposals } = require('./userQueries');
const getJobs = require('./getJobs');
const getJobProposals = require('./getJobProposals');

module.exports = {
  getUser,
  getUserJobs,
  getUserProposals,
  getJobs,
  getJobProposals,
};
