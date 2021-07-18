//contractor: skills, jobs completed.  Proposals: contractor
//name, cost estimate, start date estimate, time frame estimate

const Base = require('./index');

const Contractor = Base.discriminator('Contractor', new mongoose.Schema({
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
    ]
}))