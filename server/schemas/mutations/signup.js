const { User, Customer } = require('../../models');
const { signToken } = require('../../utils/auth');

async function signup(parent, newUserData) {
  const user = await User.create(newUserData);
  const token = signToken(user);

  return { token };
}

module.exports = signup;
