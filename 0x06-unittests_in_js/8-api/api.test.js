const request = require('request');
const { expect } = require('chai');
const sinon = require('sinon');
const { beforeEach } = require('mocha');


describe('Index page', function() {
    beforeEach(() => {
        sinon.restore();
    });

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