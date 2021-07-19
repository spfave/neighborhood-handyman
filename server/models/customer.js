//customer: jobs: name, description, required skills, 
//need date, city, job by id, proposals by id

//finds User in index.js
const User = require('./index');

const Customer = User.descriminator('Customer', new mongoose.Schema({
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