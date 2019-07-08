const jwt = require('jsonwebtoken');

module.exports.generateMusickitToken = () => {
  const header = {alg: 'ES256', kid: '46Q894H64Q'};

  return jwt.sign(
    {iss: 'GPS587THPU', iat: Math.floor(Date.now() / 1000)},
    process.env.MUSICKIT_PRIVATE_KEY,
    {algorithm: 'ES256', expiresIn: '1h', header}
  );
};
