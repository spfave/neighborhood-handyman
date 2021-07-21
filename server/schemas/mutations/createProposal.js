const { Proposal } = require('../../models');

async function newProp(parent, { newProposal }) {
    const proposal = await Proposal.create(newProposal);
  
    return { proposal };
  }
  
  module.exports = newProp;