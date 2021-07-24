const Proposal = require('../../models');

async function editProp(parent, { updateProp}) {
    const proposal = await Proposal.findOneAndUpdate(updateProp);
  
    return { proposal };
  };

  module.exports = editProp;
