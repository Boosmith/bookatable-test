"use strict";

var _userRoutes = _interopRequireDefault(require("./user/userRoutes"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var router = _express["default"].Router();

router.use("/users", _userRoutes["default"]);
module.exports = router;
