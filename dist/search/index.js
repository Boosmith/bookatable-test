"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _searchRoutes = _interopRequireDefault(require("./searchRoutes"));

var _express = require("express");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var router = (0, _express.Router)();
router.use("/users", _searchRoutes["default"]);
var _default = router;
exports["default"] = _default;
