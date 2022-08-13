const { expect } = require('chai');
const { isOddOrEven } = require('../modules.js');

describe('testing isOddOrEven', () => {
    it('happy path', () => {
        expect(isOddOrEven('hell')).to.equal('even');
        expect(isOddOrEven('hello')).to.equal('odd');
    });
    it('should return undefined for wrong type', () => {
        expect(isOddOrEven(4)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    });
    // test overload
    it('should return odd for having empty space in the string', () => {
        expect(isOddOrEven('hel l')).to.equal('odd');
        expect(isOddOrEven('hel lo')).to.equal('even');
    });
});
