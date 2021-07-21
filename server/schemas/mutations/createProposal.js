const { Proposal } = require('../../models');

async function createProposal(parent, { newProposal }) {
    const proposal = await Proposal.create(newProposal);
  
    return { proposal };
  }
  
  module.exports = createProposal;