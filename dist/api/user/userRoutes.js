"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _userController = require("./userController");

var router = (0, _express.Router)();
router.param("id", _userController.params);
router.route("/").get(_userController.get);
router.route("/:id").get(_userController.getOne);
var _default = router;
exports["default"] = _default;
