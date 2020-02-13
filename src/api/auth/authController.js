const User = require('../user/userModel');
const { generateToken, setJWTCookie } = require('../../authentication');
const { verifyPassword } = require('../../encryption');

function loginError(res) {
  return res
    .status(401)
    .json({ message: 'Login failed: incorrect username or password.' });
}

function login(req, res) {
  const { userName, password } = req.body;

  User.findOne({ userName }, '+password +salt', function(err, existingUser) {
    if (err || !existingUser) {
      return loginError(res);
    }
    return verifyPassword(password, existingUser.password, existingUser.salt)
      .then(isValid => (isValid ? true : loginError(res)))
      .then(() => generateToken(userName))
      .then(token => setJWTCookie(res, 'token', token, 1000000))
      .catch(() => loginError(res));
  });
}

module.exports = { login };
