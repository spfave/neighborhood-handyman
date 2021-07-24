// const getUser = require('./user');
const userQueries = require('./userQueries');
const jobQueries = require('./jobQueries');
const getJobProposals = require('./getJobProposals');

module.exports = {
  ...userQueries,
  ...jobQueries,
  getJobProposals,
};
