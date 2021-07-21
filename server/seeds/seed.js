const db = require('../config/connection');
const { User, Job, Proposal } = require('../models');

const userSeeds = require('./userSeeds.json');
// const jobSeeds = require('./jobSeeds.json');
// const proposalSeeds = require('./proposalSeeds.json');

db.once('open', async () => {
  try {
    // Remove existing db entries
    await User.deleteMany({});
    // await Job.deleteMany({});
    // await Proposal.deleteMany({});

    await User.create(userSeeds);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  console.log('db seeded');
  process.exit(0);
});
