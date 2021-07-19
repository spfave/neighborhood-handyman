//customer: jobs: name, description, required skills, 
//need date, city, job by id, proposals by id

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Posts = require('./Posts');

const customerSchema = new Schema({
    review: [
        {
            reviewText: {
                type: String,
                maxLength: 500,
            },
            reviewAuthor: {
                type: String,
               required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    posts: [Posts.schema]
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;