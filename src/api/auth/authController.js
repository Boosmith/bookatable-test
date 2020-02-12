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
    function callback(error, isValid) {
      console.log('callback');
      if (!isValid || error) {
        console.log(`err = ${error}`);
        return loginError(res);
      }
      return res.json(existingUser);
    }

    return verifyPassword(
      password,
      existingUser.password,
      existingUser.salt,
      callback
    );
  });
}

module.exports = { login };
