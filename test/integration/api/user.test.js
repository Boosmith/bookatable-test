const nock = require("nock");
const chai = require("chai");
const expect = chai.expect;
const {
  defaultOptions,
  nockBack
} = require("../../tools/testing/helpers/nock");
const controller = require("./userController");

describe("User Controller Tests:", function() {
  describe("Get:", function() {
    it("should return users in json response", function() {
      after(nock.restore);
      afterEach(nock.cleanAll);

      return nockBack("get-users.json", defaultOptions)
        .then(function({ nockDone }) {
          let req = {};
          let res = {};
          controller
            .get(req, res)
            .then(function(res) {
              expect(res).to.be.an("object");
            })
            .then(nockDone);
        })
        .then(function() {
          nockBack.setMode("wild");
        });
    });
  });
});
