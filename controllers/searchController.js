const fs = require("fs");
const readline = require("readline");
const csv = require('csvtojson');

const getSearchResults = async searchQuery => {
  try {
    if (searchQuery.length > 2) {
        const fileName = "data/namesList.csv"
        // Get headers. This seems to be slowing it down a bit...
        let headers = [];
        await csv()
            .fromFile(fileName)
            .on("header", header => {
                headers = header;
            })
/*            .on("done", error => {
                console.log(error);
            });*/
      
      const searchResults = [];
      const fileStream = fs.createReadStream(fileName);
      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });
      for await (const line of rl) {
        if (line.toLowerCase().indexOf(searchQuery) > -1) {
          dataObj = line.split(',')
          const result = {};
          for (let i = 0; i <= dataObj.length; i++) {
            result[headers[i]] = dataObj[i];
          }
          searchResults.push(result);
        }
      }

      return JSON.stringify(searchResults);
    }
    return JSON.stringify({});
  }
  catch(error) {
    console.log(error);
  }
};

module.exports = getSearchResults;
