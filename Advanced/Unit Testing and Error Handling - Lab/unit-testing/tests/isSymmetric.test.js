const { expect } = require('chai');
const { isSymmetric } = require('../modules.js');

describe('testing for symmetry', () => {
    it('return true if the array is symmetric', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });
    it('return false if the array is not symmetric', () => {
        expect(isSymmetric([1, 2])).to.be.false;
    });
    it('check if the passed argument is an array', () => {
        expect(isSymmetric([])).to.be.true;
    });
    it('check if the passed argument is of another type', () => {
        expect(isSymmetric('a')).to.be.false;
    });
    it('return false for invalid string array', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false;
    });
    it('return true for valid string array', () => {
        expect(isSymmetric(['a', 'a'])).to.be.true;
    });
    it('return true if the array is symmetric with three values', () => {
        expect(isSymmetric([1, 1, 1])).to.be.true;
    });
    it('return true if the array is symmetric with three values', () => {
        expect(isSymmetric(['1', 1])).to.be.false;
    });
});
