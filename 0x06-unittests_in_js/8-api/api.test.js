const { expect } = require('chai');
const request = require('request');
const sinon = require('sinon');

describe('Index page', function testApi() {
  beforeEach(() => {
    sinon.restore();
  });
  it('Test Correct status code', function testcode() {
    res = request.get('http://localhost:7865/', (err, res, data) => {
      expect(res.statusCode).to.be.equal(200);
    });
  });

  it('Correct result', function testcode() {
    res = request.get('http://localhost:7865/', (err, res, data) => {
      expect(data).to.be.equal('Welcome to the payment system');
    });
  });

  it('Test others', function testcode() {
    res = request.get('http://localhost:7865/', (err, res, data) => {
      expect(data.length).to.be.equal(29);
    });
  });
})