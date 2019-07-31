"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _searchController = require("./searchController");

var router = (0, _express.Router)();
router.route("/").get(_searchController.getSearchResults);
var _default = router;
exports["default"] = _default;
