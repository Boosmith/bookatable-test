const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true }
});

userSchema.virtual("name").get(() => {
  return this.lastName + ", " + this.firstName;
});

userSchema.methods = {
  toJson: () => {
    this.toObject();
  }
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
