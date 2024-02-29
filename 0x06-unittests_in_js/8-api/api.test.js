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

     it('Other', function() {
        res = request.get('http://localhost:7865', (err, res, data) => {
            expect(data.length).to.be.equal(29)
        });
    });
});