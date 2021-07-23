const user = require('./user');
const { getUserJobs, getUserProposals } = require('./userQueries');
const getJobs = require('./getJobs');
const getJobProposals = require('./getJobProposals');

module.exports = {
  user,
  getUserJobs,
  getUserProposals,
  getJobs,
  getJobProposals,
};
