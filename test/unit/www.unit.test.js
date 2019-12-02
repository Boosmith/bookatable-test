const dirtyChai = require('dirty-chai');
const chai = require('chai');

chai.use(dirtyChai);
const { expect } = chai;

const { startServerIfCommandline, testMe } = require('../../src/bin/www.js');

describe('src/bin/www.js', () => {
  describe('testMe when called', () => {
    it('should return true', () => {
      expect(testMe()).to.be.true();
    });
  });

  describe('startServerIfCommandline when called', () => {
    const mainStub = {};
    const appStub = { listen: () => 'net.Server' };

    it('should return a net.Server if commandline', () => {
      const result = startServerIfCommandline(
        mainStub,
        mainStub,
        appStub,
        3000
      ).getOrElse('&#x1f42e;');
      expect(result).to.equal('net.Server');
    });

    it('should return nothing if requiring', () => {
      const result = startServerIfCommandline(
        mainStub,
        {},
        appStub,
        3000
      ).getOrElse('&#x1f42e;');
      expect(result).to.not.equal('net.Server');
    });
  });
});
