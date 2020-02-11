const crypto = require('crypto');

function createHash(password, callback) {
  crypto.randomBytes(256, (err, buffer) => {
    if (err) throw err;
    const salt = buffer.toString('hex');
    crypto.pbkdf2(password, salt, 100000, 512, 'sha512', (error, hash) => {
      if (error) throw error;
      return callback(hash.toString('hex'), salt);
    });
  });
}

module.exports = { createHash };
