const { Job } = require('../../models');
const { findByIdAndRemove, findByIdAndUpdate } = require('../../models/User');

async function editJob(parent, { id, description, skills, needDate }) {
    const job = findByIdAndUpdate()
}