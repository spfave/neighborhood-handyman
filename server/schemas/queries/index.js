// const getUser = require('./user');
const userQueries = require('./userQueries');
const jobQueries = require('./jobQueries');
const proposalQueries = require('./proposalQueries');

module.exports = {
  ...userQueries,
  ...jobQueries,
  ...proposalQueries,
};
