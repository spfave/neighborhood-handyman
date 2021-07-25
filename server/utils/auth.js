require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.TOKEN_SECRET;
const expiration = process.env.TOKEN_EXP;

module.exports = {
  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.query or headers
    let token = req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) token = token.split(' ').pop().trim();

    if (!token) return req;

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // send to next endpoint
    return req;
  },

  // Create a signed token
  signToken: function ({ firstName, lastName, email, _id }) {
    const payload = { firstName, lastName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
