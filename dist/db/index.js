"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var url = "mongodb://localhost:27017/shop";

_mongoose["default"]
  .connect(url, function(err) {
    if (err) {
      console.log("Error in connection");
      throw err;
    } else {
      console.log("connected");
    }
  })
  .then();

var db = _mongoose["default"].connection;
var _default = db;
exports["default"] = _default;
