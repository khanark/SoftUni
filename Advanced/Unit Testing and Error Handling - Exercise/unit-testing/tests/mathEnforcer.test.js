const { expect } = require('chai');
const { mathEnforcer } = require('../modules.js');

describe('mathEnforcer', () => {
    describe('addFive()', () => {
        it('should return correct result with non-number arguments', () => {
            expect(mathEnforcer.addFive('2')).to.be.undefined;
        });
        it('should return correct result with number arguments', () => {
            expect(mathEnforcer.addFive(2)).to.equal(7);
            expect(mathEnforcer.addFive(2.52)).to.be.closeTo(7.52, 0.01);
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(-2.32)).to.be.closeTo(2.68, 0.01);
            expect(mathEnforcer.addFive(-2)).to.equal(3);
            expect(mathEnforcer.addFive(-4)).to.equal(1);
        });
    });
    describe('subtractTen()', () => {
        it('should return correct result with non-number arguments', () => {
            expect(mathEnforcer.subtractTen('2')).to.be.undefined;
        });
        it('should return correct result with number arguments', () => {
            expect(mathEnforcer.subtractTen(2.32)).to.be.closeTo(-7.68, 0.01);
            expect(mathEnforcer.subtractTen(12)).to.equal(2);
            expect(mathEnforcer.subtractTen(-2.32)).to.be.closeTo(-12.32, 0.01);
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
        });
    });
    describe('sum()', () => {
        it('should return correct result with non-number arguments', () => {
            expect(mathEnforcer.sum('2', 1)).to.be.undefined;
            expect(mathEnforcer.sum(2, '1')).to.be.undefined;
        });
        it('should return correct result with number arguments', () => {
            expect(mathEnforcer.sum(2, 2.53)).to.be.closeTo(4.52, 0.01);
            expect(mathEnforcer.sum(-1.32, 2)).to.be.closeTo(0.67, 0.01);
        });
    });
});
