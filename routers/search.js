const express = require("express");
const router = express.Router();
const fs = require("fs");
const searchController = require("../controllers/searchController");

const search =  function() {
  router.route("/").get(function(req, res) {
    const searchResults = searchController(req.query.q);
    res.send(searchResults);
  });
  return router;
};

module.exports = search;
