const express = require("express");
const router = express.Router();
const searchController = require("../controllers/searchController");

const search = function() {
  router.route("/").get(async (req, res) => {
    const searchResults = await searchController(req.query.q);
    res.send(searchResults);
  });
  return router;
};

module.exports = search;
