const fs = require("fs");
const readline = require("readline");

const getSearchResults = async searchQuery => {
  try {
    if (searchQuery.length > 2) {
      const searchResults = [];
      const fileStream = fs.createReadStream("data/namesList.csv");
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });
      for await (const line of rl) {
        if (line.toLowerCase().indexOf(searchQuery) > -1) {
          dataObj = line.split(',')
          searchResults.push(dataObj);
        }
      }
      console.log(`Search results = ${searchResults}`);

      return JSON.stringify(searchResults);
    }
    return JSON.stringify({});
  }
  catch(error) {
    console.log(error);
  }
};

module.exports = getSearchResults;
