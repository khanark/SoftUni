const testNumbers = require('./testNumbers');
const { expect } = require('chai');
const { sumNumbers } = require('./testNumbers');

describe('testNumbers object', function () {
    describe('sumNumbers function (num1, num2)', function () {
        it('test if num1 parameter is number, return undefined if not', function () {
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
        });

        it('test if num2 parameter is number, return undefined if not', function () {
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
        });

        it('test happy path, check if the sum of both numbers is correct', function () {
            expect(testNumbers.sumNumbers(1, 3)).to.equal('4.00');
        });
    });

    describe('numberChecker function (input)', function () {
        it('check if input is not a number, if so throw new Error', function () {
            expect(() => testNumbers.numberChecker({})).to.throw('The input is not a number!');
        });

        //! might need more tests here for the errors

        it('test if the input is even', function () {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });

        it('test if the input is odd', function () {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });
    });

    describe('averageSumArray function (arr)', function () {
        it('check if the arraySum divided by the arr.length gives the right answer', function () {
            const arr = [1, 3, 10];
            expect(testNumbers.averageSumArray(arr)).to.equal(arr.reduce((a, b) => a + b) / arr.length);
        });
    });
});
