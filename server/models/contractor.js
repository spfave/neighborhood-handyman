//contractor: skills, jobs completed.  Proposals: contractor
//name, cost estimate, start date estimate, time frame estimate

const User = require('./User');

const Contractor = User.discriminator('Contractor', new mongoose.Schema({
    skills: {
        
        required: true,
    },
    proposals: [
        {
            name: {
                type: String,
                required: true,
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
        }
    ],
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
            rating: {
                type: INTEGER,

            }
        },
    ],
}))

module.exports = mongoose.model('Contractor')