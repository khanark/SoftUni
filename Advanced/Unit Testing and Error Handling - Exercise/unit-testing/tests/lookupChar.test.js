const { expect } = require('chai');
const { lookupChar } = require('../modules.js');

describe('testing lookupChar', () => {
    it('happy path', () => {
        expect(lookupChar('hello', 4)).to.equal('o');
        expect(lookupChar('hell o', 4)).to.equal(' ');
    });
    it('tests if the parameters are of the correct type', () => {
        expect(lookupChar(1, 0)).to.be.undefined;
        expect(lookupChar([], 0)).to.be.undefined;
        expect(lookupChar({}, 0)).to.be.undefined;
        expect(lookupChar('hello', 4.2)).to.be.undefined;
    });
    it('tests if the index is greater than the string', () => {
        expect(lookupChar('hello', 5)).to.equal('Incorrect index');
        expect(lookupChar('hello', 6)).to.equal('Incorrect index');
        expect(lookupChar('hello', -1)).to.equal('Incorrect index');
    });
});
