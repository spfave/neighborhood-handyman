const { User } = require('../../models/User');

async function  user(parent, args, context) {
    if (context.user) {
      const user = await User.findById(context.user.id).populate({
      });

      return user;
    }

    throw new AuthenticationError('Not logged in');
  };

  module.exports = user;