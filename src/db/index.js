const mongoose = require('mongoose');

const baseURL = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const url = `${baseURL}/trelloid`;
console.log(`url = ${url}\n`);

mongoose
  .set('useNewUrlParser', true)
  .set('useFindAndModify', false)
  .set('useCreateIndex', true)
  .set('useUnifiedTopology', true)
  .connect(url, err => {
    if (err) {
      console.log('Error in connection');
      throw err;
    } else {
      console.log('connected');
    }
  })
  .then();

const db = mongoose.connection;
module.exports = db;
