//both: name, email, password, rating, city
//customer: jobs: name, description, required skills, 
//need date, city, job by id, proposals by id
//contractor: skills, jobs completed.  Proposals: contractor
//name, cost estimate, start date estimate, time frame estimate
const {Schema, model} = require('mongoose');


const baseOptions = {
    discriminatorKey: 'userType',
    collection: 'handymanDB',
}

//base schema: shared with both types of user
const Base = mongoose.model('Base', new mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
     },
     password: {
         type: String,
         required: true,
         minLength: 8,
     },
     rating: [
         {
             ratingText: {
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
     city: {
         type: String,
         required: true,
     }
}))

module.exports = mongoose.model('Base');
