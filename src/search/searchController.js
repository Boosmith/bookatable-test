const fs = require("fs");
const readline = require("readline");
const csv = require("csvtojson");
const path = require("path");
const userModel = require("../api/user/userModel");

const getSearchResults = async searchQuery => {
  try {
    if (searchQuery.length > 2) {
      const fileName = path.resolve("src", "data", "namesList.csv");
      // Get headers. This seems to be slowing it down a bit...
      let headers = [];
      await csv()
        .fromFile(fileName)
        .on("header", header => {
          headers = header;
        });

      const searchResults = [];
      const fileStream = fs.createReadStream(fileName);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });
      for await (const line of rl) {
        let dataObj = line.split(",");
        if (
          dataObj[1].substr(0, searchQuery.length).toLowerCase() ===
          searchQuery.toLowerCase()
        ) {
          const result = {};
          for (let i = 0; i <= dataObj.length; i++) {
            result[headers[i]] = dataObj[i];
          }
          searchResults.push(result);
          userModel.create(result, function(err, docs) {
            if (err) {
              console.error(err);
            }
          });
        }
      }
      const jsonResults = JSON.stringify(searchResults);

      return jsonResults;
    }
    return JSON.stringify({});
  } catch (error) {
    console.log(error);
  }
};

module.exports = getSearchResults;
