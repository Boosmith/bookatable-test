const { db } = require("../../models");

const userSchema = new db.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postcode: { type: String, required: true }
});

userSchema.virtual("name").get(function() {
  return this.lastName + ", " + this.firstName;
});

const userModel = db.model("User", userSchema);

module.exports = userModel;
