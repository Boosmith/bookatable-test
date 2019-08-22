const mongoose = require("mongoose");

const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost:27017";
const mongoDb = mongoUrl + "/trelloid";

mongoose
  .set("useNewUrlParser", true)
  .set("useFindAndModify", false)
  .set("useCreateIndex", true)
  .connect(mongoDb, err => {
    if (err) {
      console.log("Error in connection");
      throw err;
    } else {
      console.log("connected");
    }
  })
  .then();

const db = mongoose.connection;
module.exports = db;
