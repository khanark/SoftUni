const numberOperations = require('.//numberOperations');
const { expect } = require('chai');
const { sumArrays } = require('.//numberOperations');

describe('numberOperations Object', function () {
  describe('powNumber(num)', function () {
    it('test the outcome of the function', function () {
      expect(numberOperations.powNumber(5)).to.equal(25);
    });
  });

  describe('numberChecker(input)', function () {
    it('test if the input is a number', function () {
      expect(() => numberOperations.numberChecker('test')).to.throw(
        'The input is not a number!'
      );
    });

    it('test if input is less than 100', function () {
      expect(numberOperations.numberChecker('99')).to.equal(
        'The number is lower than 100!'
      );
    });

    it('test if the input is equal or more than 100', function () {
      expect(numberOperations.numberChecker(100)).to.equal(
        'The number is greater or equal to 100!'
      );
    });
  });

  describe('sumArrays(arr1, arr2)', function () {
    it('check the outcome of the function', function () {
      const firstArr = [1, 10, 5, 20]; // 4
      const secondArr = [2, 15, 30, 7, 12]; // 5

      const longerArr =
        firstArr.length > secondArr.length ? firstArr : secondArr;
      const rounds =
        firstArr.length < secondArr.length ? firstArr.length : secondArr.length;

      const resultArr = [];

      for (let i = 0; i < rounds; i++) {
        resultArr.push(firstArr[i] + secondArr[i]);
      }

      resultArr.push(...longerArr.slice(rounds));

      expect(numberOperations.sumArrays(firstArr, secondArr)).to.deep.equal(
        resultArr
      );
    });
  });
});
