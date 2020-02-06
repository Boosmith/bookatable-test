const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  postcode: { type: String, required: true },
  userName: { type: String, required: true }
});

userSchema.index({
  firstName: 1,
  lastName: 1,
  address: 1,
  city: 1,
  postcode: 1,
  userName: 1
});

userSchema.virtual('name').get(() => {
  return `${this.lastName}, ${this.firstName}`;
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
