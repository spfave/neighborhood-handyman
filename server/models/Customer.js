//customer: jobs: name, description, required skills, 
//need date, city, job by id, proposals by id

const mongoose = require('mongoose');
const { Schema } = mongoose;

const Job = require('./Job');

const customerSchema = new Schema({
    jobs: [Job.schema]
})

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;