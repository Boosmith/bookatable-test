const jwt = require('jsonwebtoken');

const JWT_SECRET = 'secret1';

const generateToken = userName => {
  return new Promise((resolve, reject) => {
    jwt.sign({ userName }, JWT_SECRET, { expiresIn: '1d' }, (err, token) => {
      if (err) return reject(err);
      return resolve(token);
    });
  });
};

const setJWTCookie = (res, name, token, expiration) => {
  res.cookie(name, token, {
    expires: new Date(Date.now() + expiration),
    secure: false,
    httpOnly: true
  });
  res.end();
};

module.exports = { generateToken, setJWTCookie };
