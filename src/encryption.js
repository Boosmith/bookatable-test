const crypto = require('crypto');
const util = require('util');

const randomBytes = util.promisify(crypto.randomBytes);

const pbkdf2 = util.promisify(crypto.pbkdf2);

async function createHash(password) {
  const saltBuffer = await randomBytes(256);
  const salt = saltBuffer.toString('hex');
  const hash = await pbkdf2(password, salt, 100000, 512, 'sha512');
  return { hash: hash.toString('hex'), salt };
}

function verifyPassword(candidatePassword, storedPassword, salt, callback) {
  crypto.pbkdf2(
    candidatePassword,
    salt,
    100000,
    512,
    'sha512',
    (error, hash) => {
      if (error) throw error;
      const isValid = hash.toString('hex') === storedPassword;
      console.log(`isValid = ${isValid}`);
      return callback(null, isValid);
    }
  );
}

module.exports = { createHash, verifyPassword };
