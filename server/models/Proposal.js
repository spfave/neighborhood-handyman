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
                type: INTEGER,
                required: true,
            },
            startEstimate: {
                type: Date,
                required: true,
            },
            timeFrame: {
                type: String,
                required: true,
            }
});

const Proposal = mongoose.model('Proposal', proposalSchema);

module.exports = Proposal;
