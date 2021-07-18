//both: name, email, password, rating, city
//customer: jobs: name, description, required skills, 
//need date, city, job by id, proposals by id
//contractor: skills, jobs completed.  Proposals: contractor
//name, cost estimate, start date estimate, time frame estimate



const userOptions = {
    discriminatorKey: 'userType',
    collection: 'users',
}

//base schema: shared with both types of user
const User = mongoose.model('User', new mongoose.Schema({
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
     city: {
         type: String,
         required: true,
     }
}))

module.exports = mongoose.model('User');