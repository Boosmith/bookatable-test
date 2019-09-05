const mongoose = require("mongoose");
const {
  // MONGO_USERNAME,
  // MONGO_PASSWORD,
  MONGO_PORT,
  MONGO_DB,
  MONGODB_URI
} = process.env;

const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME || "localhost";

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000
};

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
const url =
  MONGODB_URI || `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;
console.log(`url = ${url}\n`);

mongoose
  .set("useFindAndModify", false)
  .set("useCreateIndex", true)
  .connect(url, options)
  .then(function() {
    console.log("MongoDB is connected");
  })
  .catch(function(err) {
    console.log(err);
  });

const db = mongoose.connection;
module.exports = db;
