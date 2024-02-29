const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
    it('Correct status code', function() {
        res = request.get('http://localhost:7865', (err, res, data) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });
    it('Correct result', function() {
        res = request.get('http://localhost:7865', (err, res, data) => {
            expect(data).to.be.equal('Welcome to the payment system');
        });
    });

    it('Test Correct status code when :id is a number', function() {
        res = request.get('http://localhost:7865/cart/12', (err, res, data) => {
          expect(data).to.be.equal(`Payment methods for cart ${45}`);
        });
      });
    
      it('Test Correct status code when :id is a number', function() {
        res = request.get('http://localhost:7865/cart/12', (err, res, data) => {
          expect(res.statusCode).to.be.equal(200);
        });
      });
    
      it('Test aCorrect status code when :id is a decimal', function() {
        res = request.get('http://localhost:7865/cart/45.4', (err, res, data) => {
          expect(res.statusCode).to.be.equal(404);
        });
      });
    
      it('Test Correct status code when :id is a string', function() {
        res = request.get('http://localhost:7865/cart/great', (err, res, data) => {
          expect(res.statusCode).to.be.equal(404);
        });
    });
});