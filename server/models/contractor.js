//contractor: skills, jobs completed.  Proposals: contractor
//name, cost estimate, start date estimate, time frame estimate
const mongoose = require('mongoose');
const { Schema } = mongoose;

const Proposal = require('./Proposal');

const contractorSchema = new Schema({
    skills: {
        
        required: true,
    },
    review: [
        {
            reviewText: {
                type: String,
                maxLength: 500,
            },
            ratingAuthor: {
                type: String,
               required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],
    proposal: [Proposal.schema]
})

module.exports = mongoose.model('Contractor', contractorSchema)