const router = require("express").Router();
const controller = require("./searchController");

router.get("/", async (req, res) => {
  console.log(req.query.q);
  const searchResults = await controller.getSearchResults(req.query.q);
  res.send(searchResults);
});

module.exports = router;
