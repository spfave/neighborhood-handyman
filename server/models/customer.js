//customer: jobs: name, description, required skills, 
//need date, city, job by id, proposals by id

//finds base in index.js
const Base = require('./index');

const Customer = Base.descriminator('Customer', new mongoose.Schema({
    jobsNeeded : [
        {
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

                required: true,
            },
            city: {
                type: String,
                required:true,
            },
            needDate: {
                type: Date,
                required: true,
            },
            createdDate: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp)
            },
        },
    ],
}))

module.exports = mongoose.model('Customer')