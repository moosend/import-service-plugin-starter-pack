"use strict";
var chai = require('chai');
var expect = chai.expect;
var helper_1 = require('../../util/helper');
describe('Helper Util', function () {
    describe('generateGuid function', function () {
        it('should generate a unique id every time', function () {
            var id1 = helper_1.generateGuid();
            var id2 = helper_1.generateGuid();
            expect(id1).not.to.equal(id2);
        });
        it('should generate a unique id that is a string', function () {
            var id1 = helper_1.generateGuid();
            expect(id1).to.be.a('string');
        });
    });
});
