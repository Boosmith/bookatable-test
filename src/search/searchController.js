const userModel = require('../api/user/userModel');

const getSearchResults = async searchQuery => {
  const re = new RegExp(searchQuery, 'i');
  const results = await userModel.find({
    $or: [
      { firstName: re },
      { lastName: re },
      { address: re },
      { city: re },
      { postcode: re }
    ]
  });
  return results;
};

module.exports = getSearchResults;
