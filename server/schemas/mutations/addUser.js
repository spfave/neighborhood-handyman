const { User } = require('../../models');
const { signToken } = require('../../utils/auth');

async function addUser(parent, { newUser }) {
  const user = await User.create(newUser);
  const token = signToken(user);

  return { token };
}

module.exports = addUser;
