const mongoose = require('mongoose');
const { createHash } = require('../../encryption');

const userSchema = mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true, select: false },
  salt: { type: String, select: false },
  postcode: { type: String, required: true },
  userName: { type: String, required: true, index: true, unique: true }
});

userSchema.pre('save', function(next) {
  const user = this;
  function callback(hash, salt) {
    user.password = hash;
    user.salt = salt;
    next();
  }
  if (user.password && !user.isModified('password')) {
    next();
  } else {
    createHash(user.password, callback);
  }
});

userSchema.virtual('name').get(() => {
  return `${this.lastName}, ${this.firstName}`;
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
