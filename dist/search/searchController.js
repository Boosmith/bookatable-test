"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearchResults = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function _asyncIterator(iterable) {
  var method;
  if (typeof Symbol !== "undefined") {
    if (Symbol.asyncIterator) {
      method = iterable[Symbol.asyncIterator];
      if (method != null) return method.call(iterable);
    }
    if (Symbol.iterator) {
      method = iterable[Symbol.iterator];
      if (method != null) return method.call(iterable);
    }
  }
  throw new TypeError("Object is not async iterable");
}

var fs = require("fs");

var readline = require("readline");

var csv = require("csvtojson");

var getSearchResults =
  /*#__PURE__*/
  (function() {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(searchQuery) {
        var fileName,
          headers,
          searchResults,
          fileStream,
          rl,
          _iteratorNormalCompletion,
          _didIteratorError,
          _iteratorError,
          _iterator,
          _step,
          _value,
          line,
          dataObj,
          result,
          i;

        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;

                  if (!(searchQuery.length > 2)) {
                    _context.next = 44;
                    break;
                  }

                  fileName = "data/namesList.csv"; // Get headers. This seems to be slowing it down a bit...

                  headers = [];
                  _context.next = 6;
                  return csv()
                    .fromFile(fileName)
                    .on("header", function(header) {
                      headers = header;
                    });

                case 6:
                  searchResults = [];
                  fileStream = fs.createReadStream(fileName);
                  rl = readline.createInterface({
                    input: fileStream,
                    crlfDelay: Infinity
                  });
                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _context.prev = 11;
                  _iterator = _asyncIterator(rl);

                case 13:
                  _context.next = 15;
                  return _iterator.next();

                case 15:
                  _step = _context.sent;
                  _iteratorNormalCompletion = _step.done;
                  _context.next = 19;
                  return _step.value;

                case 19:
                  _value = _context.sent;

                  if (_iteratorNormalCompletion) {
                    _context.next = 27;
                    break;
                  }

                  line = _value;
                  dataObj = line.split(",");

                  if (
                    dataObj[1].substr(0, searchQuery.length).toLowerCase() ===
                    searchQuery.toLowerCase()
                  ) {
                    result = {};

                    for (i = 0; i <= dataObj.length; i++) {
                      result[headers[i]] = dataObj[i];
                    }

                    searchResults.push(result);
                  }

                case 24:
                  _iteratorNormalCompletion = true;
                  _context.next = 13;
                  break;

                case 27:
                  _context.next = 33;
                  break;

                case 29:
                  _context.prev = 29;
                  _context.t0 = _context["catch"](11);
                  _didIteratorError = true;
                  _iteratorError = _context.t0;

                case 33:
                  _context.prev = 33;
                  _context.prev = 34;

                  if (
                    !(!_iteratorNormalCompletion && _iterator["return"] != null)
                  ) {
                    _context.next = 38;
                    break;
                  }

                  _context.next = 38;
                  return _iterator["return"]();

                case 38:
                  _context.prev = 38;

                  if (!_didIteratorError) {
                    _context.next = 41;
                    break;
                  }

                  throw _iteratorError;

                case 41:
                  return _context.finish(38);

                case 42:
                  return _context.finish(33);

                case 43:
                  return _context.abrupt(
                    "return",
                    JSON.stringify(searchResults)
                  );

                case 44:
                  return _context.abrupt("return", JSON.stringify({}));

                case 47:
                  _context.prev = 47;
                  _context.t1 = _context["catch"](0);
                  console.log(_context.t1);

                case 50:
                case "end":
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 47], [11, 29, 33, 43], [34, , 38, 42]]
        );
      })
    );

    return function getSearchResults(_x) {
      return _ref.apply(this, arguments);
    };
  })();

exports.getSearchResults = getSearchResults;
