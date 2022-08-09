const { expect } = require('chai');
const { sum } = require('../modules');

// testing possible outcomes
describe('testing sum function', () => {
    it('sums different numbers', () => {
        expect(sum([2, 3, 4])).to.equal(9);
    });
    it('test correct behavior', () => {
        expect(sum([1, 1])).to.equal(2);
    });
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
    it('check return sum', () => {
        expect(sum([1, 2])).to.equal(3);
    });
});
