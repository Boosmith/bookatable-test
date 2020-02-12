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

async function verifyPassword(candidatePassword, storedPassword, salt) {
  const hashBuffer = await pbkdf2(
    candidatePassword,
    salt,
    100000,
    512,
    'sha512'
  );
  const hash = hashBuffer.toString('hex');
  return hash === storedPassword;
}

module.exports = { createHash, verifyPassword };
