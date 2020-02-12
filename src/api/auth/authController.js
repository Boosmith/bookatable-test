const User = require('../user/userModel');
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
      .then(isValid => (isValid ? res.json(existingUser) : loginError(res)))
      .catch(() => loginError(res));
  });
}

module.exports = { login };
