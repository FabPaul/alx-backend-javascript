const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const { describe } = require('mocha');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', function() {
    it('Makes sure the math function used are the same.', function() {
        const stub = sinon.stub(Utils, 'calculateNumber').return(10);
        sendPaymentRequestToApi(100, 20);
        sinon.assert.calledOnceWithExactly(stub, 'SUM', 100, 20);
        stub.reset()
    });
});