"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOne = exports.get = exports.params = void 0;

var _userModel = _interopRequireDefault(require("./userModel"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var params = function params(req, res, next, id) {
  _userModel["default"].findById(id).then(
    function(user) {
      if (!user) {
        next(new Error("No user with that id"));
      } else {
        req.user = user;
        next();
      }
    },
    function(err) {
      next(err);
    }
  );
};

exports.params = params;

var get = function get(req, res, next) {
  _userModel["default"].find({}).then(
    function(users) {
      res.json(
        users.map(function(user) {
          return user.toJson();
        })
      );
    },
    function(err) {
      next(err);
    }
  );
};

exports.get = get;

var getOne = function getOne(req, res) {
  var user = req.user.toJson();
  res.json(user);
};

exports.getOne = getOne;
