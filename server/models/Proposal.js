const mongoose = require('mongoose');

const { Schema } = mongoose;

const proposalSchema = new Schema({
  name: {
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
  costEstimate: {
    type: Number,
    required: true,
  },
  startEstimate: {
    type: Date,
    required: true,
  },
  timeFrame: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  job: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
};);

const Proposal = mongoose.model('Proposal', proposalSchema);

module.exports = Proposal;
