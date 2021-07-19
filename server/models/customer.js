//customer: jobs: name, description, required skills, 
//need date, city, job by id, proposals by id

//finds User in index.js
const User = require('./index');

const Customer = User.descriminator('Customer', new mongoose.Schema({
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
                default: Date.now,            },
            rating: {
                type: INTEGER,

            }
        },
    ],
}))

module.exports = mongoose.model('Customer')