const userModel = require("../api/user/userModel");

const getSearchResults = async searchQuery => {
  const re = new RegExp(searchQuery, "i");
  const results = await userModel.find({ lastName: re });
  return results;
};

module.exports = getSearchResults;
