//both: name, email, password, rating, city
//customer: jobs: name, description, required skills, 
//need date, city, job by id, proposals by id
//contractor: skills, jobs completed.  Proposals: contractor
//name, cost estimate, start date estimate, time frame estimate

const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const bcrypt = require('bcyrpt');

const userOptions = {
    discriminatorKey: 'userType',
    collection: 'users',
}

//base schema: shared with both types of user
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
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
    city: {
        type: String,
        required: true,
    },
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);


module.exports = User;

