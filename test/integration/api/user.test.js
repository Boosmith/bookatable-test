const chai = require("chai");
const expect = chai.expect;
const app = require("../../../src/app");
const request = require("supertest")(app);

describe("API Integration Tests:", function() {
  describe("Users:", function(done) {
    describe("Get:", function() {
      it("should return status of 200", function(done) {
        request.get("/api/users").end(function(err, res) {
          if (err) {
            done(err);
          }
          expect(res.status).to.equal(200);
          done();
        });
      });
    });
  });
});
