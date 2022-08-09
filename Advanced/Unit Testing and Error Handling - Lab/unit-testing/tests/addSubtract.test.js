const { expect } = require('chai');
const { createCalculator } = require('../modules');

describe('calculator function', () => {
    it('test module', () => {
        expect(createCalculator()).to.be.an('object');
    });
    it('test properties add', () => {
        expect(createCalculator()).to.haveOwnProperty('add');
    });
    it('test properties subtract', () => {
        expect(createCalculator()).to.haveOwnProperty('subtract');
    });
    it('test properties get', () => {
        expect(createCalculator()).to.haveOwnProperty('get');
    });
    it('test get function return', () => {
        expect(createCalculator().get()).to.equal(0);
    });
    it('add() parameter can be parsed to number', () => {
        expect(createCalculator().add('a')).to.equal(undefined);
    });
    it('subtract() parameter can be parsed to number', () => {
        expect(createCalculator().subtract('b')).to.equal(undefined);
    });
});
