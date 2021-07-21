const db = require('../config/connection');
const { User, Job, Proposal } = require('../models');

const userSeeds = require('./userSeeds.json');
const jobSeeds = require('./jobSeeds.js');
const proposalSeeds = require('./proposalSeeds.js');

const randomArrayIndex = (arrLen) => Math.floor(Math.random() * arrLen);

db.once('open', async () => {
  try {
    // Remove existing db entries
    await User.deleteMany({});
    await Job.deleteMany({});
    await Proposal.deleteMany({});

    // Create db entries
    const users = await User.create(userSeeds);

    for (const job of jobSeeds) {
      job.user = users[randomArrayIndex(users.length)]._id;
    }
    const jobs = await Job.create(jobSeeds);

    for (const proposal of proposalSeeds) {
      proposal.user = users[randomArrayIndex(users.length)]._id;
      proposal.job = jobs[randomArrayIndex(jobs.length)]._id;
    }
    await Proposal.create(proposalSeeds);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  console.log('db seeded');
  process.exit(0);
});
