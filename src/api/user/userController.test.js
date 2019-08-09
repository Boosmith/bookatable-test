const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const controller = require("./userController");

describe("User Controller Tests:", function() {
  describe("Get", function() {
    it("should return an array of users", function() {
      let req = {};
      let res = {
        json: sinon.spy()
      };
      let next = {};

      controller.get(req, res, next);
    });
  });
});
