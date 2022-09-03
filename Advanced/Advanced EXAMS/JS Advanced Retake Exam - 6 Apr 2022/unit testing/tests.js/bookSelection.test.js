const bookSelection = require('../bookSelection');
const { expect } = require('chai');

describe('Tests …', function () {
  describe('isGenreSuitable(genre, age)', function () {
    it('age parameter is less than 12', function () {
      expect(bookSelection.isGenreSuitable('Thriller', 11)).to.equal(
        'Books with Thriller genre are not suitable for kids at 11 age'
      );
    });
    it('age parameter is equal to 12', function () {
      expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(
        'Books with Horror genre are not suitable for kids at 12 age'
      );
    });
    it('age parameter is more than 12', function () {
      expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal(
        'Those books are suitable'
      );
    });
    it('genre parameter different than Thriller & Horror', function () {
      expect(bookSelection.isGenreSuitable('Comedy', 13)).to.equal(
        'Those books are suitable'
      );
    });
    it('genre parameter different than Thriller & Horror but less than or equal to 12', function () {
      expect(bookSelection.isGenreSuitable('Comedy', 12)).to.equal(
        'Those books are suitable'
      );
      expect(bookSelection.isGenreSuitable('Comedy', 11)).to.equal(
        'Those books are suitable'
      );
    });
  });
  describe('isItAffordable(price, budget)', function () {
    it('type of price', function () {
      try {
        bookSelection.isItAffordable('', 300);
      } catch (err) {
        expect(err.message).to.equal('Invalid input');
      }
    });
    it('type of budged', function () {
      try {
        bookSelection.isItAffordable(20, '');
      } catch (err) {
        expect(err.message).to.equal('Invalid input');
      }
    });
    it('testing if result is negative number', function () {
      // let result =
      expect(bookSelection.isItAffordable(20, 15)).to.equal(
        "You don't have enough money"
      );
    });
    it('testing if result is positive number', function () {
      let result = 20 - 15;
      expect(bookSelection.isItAffordable(15, 20)).to.equal(
        `Book bought. You have ${result}$ left`
      );
    });
  });

  describe('suitableTitles(array, wantedGenre)', function () {
    it('test if Array parameter is array', function () {
      try {
        bookSelection.suitableTitles('wanted', 'unwanted');
      } catch (err) {
        expect(err.message).to.equal('Invalid input');
      }
    });
    it('test if wantedGenre parameter is string', function () {
      try {
        bookSelection.suitableTitles(['wanted'], 12);
      } catch (err) {
        expect(err.message).to.equal('Invalid input');
      }
    });
    it('happy path', function () {
      const resultArr = ['The Dog Pound', 'Morbit'];
      const books = [
        { title: 'The Dog Pound', genre: 'Comedy' },
        { title: 'Shark Attack', genre: 'Horror' },
        { title: 'Morbit', genre: 'Comedy' },
      ];

      expect(bookSelection.suitableTitles(books, 'Comedy')).to.deep.equal(
        resultArr
      );
    });
  });
});
