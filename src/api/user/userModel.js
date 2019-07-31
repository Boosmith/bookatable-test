import db from "../../db";
import mongoose from "mongoose";

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
    const obj = this.toObject();
    return obj;
  }
};

export default db.model("User", userSchema);
