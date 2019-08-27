const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

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

userSchema.virtual("name").get(() => {
  return this.lastName + ", " + this.firstName;
});

userSchema.pre("save", function(next) {
  const user = this;
  if (!this.isModified("password")) {
    next();
  } else {
    bcrypt.hash(user.password, 10, function(err, hash) {
      if (err) {
        next(err);
      } else {
        user.password = hash;
        next();
      }
    });
  }
});
userSchema.methods = {
  comparePassword(receivedPassword, next) {
    bcrypt.compare(receivedPassword, this.password, function(err, isMatch) {
      if (err) return next(err);
      next(null, isMatch);
    });
  }
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
