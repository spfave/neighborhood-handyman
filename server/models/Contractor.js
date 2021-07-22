//contractor: skills, jobs completed.  Proposals: contractor
//name, cost estimate, start date estimate, time frame estimate
const mongoose = require('mongoose');
const { Schema } = mongoose;

const Proposal = require('./Proposal');

const contractorSchema = new Schema({
  skills: {
    type: String,
    required: true,
  },
  proposal: [Proposal.schema],
});

const Contractor = mongoose.model('Contractor', contractorSchema);

module.exports = Contractor;
