const { User, Customer } = require('../../models');
const { signToken } = require('../../utils/auth');

async function signup(parent, { newUser }) {
  const user = await User.create(newUser);
  const token = signToken(user);

  return { token };
}

module.exports = signup;
