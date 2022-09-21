const library = require("../library");
const { expect } = require("chai");
const { it } = require("mocha");

describe("library object", function () {
    // first
    describe("calcPriceOfBook(nameOfBook, year)", function () {
        const price = 20;

        it("test if nameOfBook is string and if not return err", function () {
            expect(() => library.calcPriceOfBook(1, 1994)).to.throw(
                "Invalid input"
            );
        });

        it("test if year is integer or not", function () {
            expect(() => library.calcPriceOfBook("Eden", 1994.2)).to.throw(
                "Invalid input"
            );
        });

        it("test if year is less than 1980 bonus has to be applied", function () {
            const total = price - price * 0.5;
            expect(library.calcPriceOfBook("Eden", 1979)).to.equal(
                `Price of Eden is ${total.toFixed(2)}`
            );
        });

        it("test if year is equal to 1980 bonus has to be applied", function () {
            const total = price - price * 0.5;
            expect(library.calcPriceOfBook("Eden", 1980)).to.equal(
                `Price of Eden is ${total.toFixed(2)}`
            );
        });

        it("test if year is more than 1980 no bonus should be applied", function () {
            // const total = price
            expect(library.calcPriceOfBook("Eden", 1981)).to.equal(
                `Price of Eden is ${price.toFixed(2)}`
            );
        });
    });

    // second
    describe("findBook(booksArr, desiredBook)", function () {
        const books = ["Eden", "Boris in the wild", "Jungle Adventure"];
        const test = [];

        it("test if the booksArr is empty", function () {
            expect(() => library.findBook([], "Eden")).to.throw(
                "No books currently available"
            );
        });

        it("test if the desired book is in the book array", function () {
            expect(library.findBook(books, "Boris in the wild")).to.equal(
                "We found the book you want."
            );
        });

        it("test if the desired books is NOT in the book array", function () {
            expect(library.findBook(books, "RandomString")).to.equal(
                "The book you are looking for is not here!"
            );
        });
    });

    // third
    describe("arrangeTheBooks(countBooks)", function () {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        it("test if countBooks is NOT an integer", function () {
            expect(() => library.arrangeTheBooks(10.5)).to.throw(
                "Invalid input"
            );
        });

        it("test if countBooks is a number", function () {
            expect(() => library.arrangeTheBooks("109")).to.throw(
                "Invalid input"
            );
        });

        it("test if countBooks NEGATIVE number", function () {
            expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input");
        });

        it("check if availableSpace is more than countBooks", function () {
            expect(library.arrangeTheBooks(10)).to.equal(
                "Great job, the books are arranged."
            );
        });

        it("check if availableSpace is more than countBooks", function () {
            expect(library.arrangeTheBooks(0)).to.equal(
                "Great job, the books are arranged."
            );
        });

        it("check if availableSpace is more than countBooks", function () {
            expect(library.arrangeTheBooks(12)).to.equal(
                "Great job, the books are arranged."
            );
        });

        it("check if availableSpace is more than countBooks", function () {
            expect(library.arrangeTheBooks(1)).to.equal(
                "Great job, the books are arranged."
            );
        });

        it("check if availableSpace is more than countBooks", function () {
            expect(library.arrangeTheBooks(0)).to.equal(
                "Great job, the books are arranged."
            );
        });

        it("test if availableSpace is equal to the countBooks", function () {
            expect(library.arrangeTheBooks(40)).to.equal(
                "Great job, the books are arranged."
            );
        });
        it("test if availableSpace is equal to the countBooks", function () {
            expect(library.arrangeTheBooks(41)).to.equal(
                "Insufficient space, more shelves need to be purchased."
            );
        });

        it("test if availableSpace is less than countBooks", function () {
            expect(library.arrangeTheBooks(45)).to.equal(
                "Insufficient space, more shelves need to be purchased."
            );
        });
    });
});
