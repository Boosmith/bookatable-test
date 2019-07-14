const { db } = require("../../db");

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

userSchema.methods = {
  toJson: function() {
    const obj = this.toObject();
    return obj;
  }
};

module.exports = db.model("User", userSchema);
