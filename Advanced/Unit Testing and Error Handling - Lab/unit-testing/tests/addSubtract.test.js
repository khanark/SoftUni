const { expect } = require('chai');
const { createCalculator } = require('../modules');

describe('calculator function', () => {
    let result;

    beforeEach(() => {
        result = createCalculator();
    });

    it('the function returns a module/object with three properties', () => {
        expect(result).to.be.an('object');
        expect(result).to.include.all.keys('add', 'subtract', 'get');
    });

    it('The function get() returns the value of the internal sum', () => {
        expect(result.get()).to.equal(0);
    });

    it('The functions add() and subtract() take a parameter that can be parsed as a number', () => {
        result.add('5');
        result.subtract('1');
        expect(result.get()).to.equal(4);
    });

    it('Keep an internal sum that cant be modified from the outside', () => {
        let value = result.get() + 3;
        expect(result.get()).to.not.equal(value);
    });
    it('expect value to equal after add; add; subtract ', () => {
        result.add(6);
        result.add('3');
        result.subtract('-3');
        let value = result.get();
        expect(value).to.equal(12);
    });
});
