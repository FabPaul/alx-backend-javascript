const request = require('request');
const { expect } = require('chai');

describe('Index page', function() {
    it('Correct status code', function() {
        request('http://localhost:7865', (_err, res, _data) => {
            expect(res.statusCode).to.be.equal(200);
        });
    });
    
    it('Correct result', function() {
        request('http://localhost:7865', (_err, _res, data) => {
            expect(data).to.contain('Welcome to the payment system');
        });
    });
    
     it('Other', function() {
        request('http://localhost:7865', (_err, res, _data) => {
            expect(res.headers['content-length']).to.be.equal(29)
        });
    });
});