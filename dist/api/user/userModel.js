"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = _interopRequireDefault(require("../../db"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _this = void 0;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var userSchema = _mongoose["default"].Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  }
});

userSchema.virtual("name").get(function() {
  return _this.lastName + ", " + _this.firstName;
});
userSchema.methods = {
  toJson: function toJson() {
    var obj = _this.toObject();

    return obj;
  }
};

var _default = _db["default"].model("User", userSchema);

exports["default"] = _default;
