const mongoose = require('mongoose');

const { Schema } = mongoose;
const Proposal = require('./Proposal');

const jobSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  jobCustomer: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 1000,
    trim: true,
  },
  skills: {
    type: [],
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  needDate: {
    type: Date,
    required: false,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  proposals: [Proposal.schema],  
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
