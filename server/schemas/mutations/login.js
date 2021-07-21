const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../../models');
const { signToken } = require('../../utils/auth');

async function login(parent, { email, password }) {
  const user = await User.findOne({ email });
  if (!user) throw new AuthenticationError('Incorrect login credentials');

  const correctPw = await user.isCorrectPassword(password);
  if (!correctPw) throw new AuthenticationError('Incorrect login credentials');

  const token = signToken(user);
  return { token };
}

module.exports = login;
