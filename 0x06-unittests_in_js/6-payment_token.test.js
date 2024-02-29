const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
    it('Make sure it returns a promise', function() {
        const promise = getPaymentTokenFromAPI();
        expect(promise).to.be.an.instanceof(Promise);
    });

    it('Makes sure it gives the correct response', function() {
        getPaymentTokenFromAPI(true).then(data => {
            expect(data).to.be.an('object');
            expect(data).to.have.property('data');
        });
        done();
    })
})