const flowerShop = require('../flowerShop');
const { expect } = require('chai');

describe('flowerShop Object', function () {
    describe('calcPriceOfFlowers(flower, price, quantity)', function () {
        it('testing flower parameter', function () {
            try {
                flowerShop.calcPriceOfFlowers(1, 12, 12);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('testing price parameter', function () {
            try {
                flowerShop.calcPriceOfFlowers('sunflower', '12', 12);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('testing quantity parameter', function () {
            try {
                flowerShop.calcPriceOfFlowers('sunflower', 12, '12');
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('testing happy path', function () {
            const result = 120 * 4;
            const flower = 'sunFlower';
            expect(flowerShop.calcPriceOfFlowers('sunFlower', 120, 4)).to.equal(
                `You need $${result.toFixed(2)} to buy ${flower}!`
            );
        });
    });

    describe('checkFlowersAvaiblable(flower, gardenArr)', function () {
        it('testing the index of flower in the gardenArr > 0', function () {
            const arr = ['sunFlower', 'somethingElse', 'dunnoAnyFlower'];
            const flower = 'dunnoAnyFlower';
            expect(flowerShop.checkFlowersAvailable(flower, arr)).to.equal(`The ${flower} are available!`);
        });
        it('testing the index of flower in the gardenArr = 0', function () {
            const arr = ['sunFlower', 'somethingElse', 'dunnoAnyFlower'];
            const flower = 'sunFlower';
            expect(flowerShop.checkFlowersAvailable(flower, arr)).to.equal(`The ${flower} are available!`);
        });
        it('testing the index of flower in the gardenArr < 0 (does not exist in the array)', function () {
            const arr = ['sunFlower', 'somethingElse', 'dunnoAnyFlower'];
            const flower = 'somethingNew';
            expect(flowerShop.checkFlowersAvailable(flower, arr)).to.equal(
                `The ${flower} are sold! You need to purchase more!`
            );
        });
    });

    describe('sellFlowers(gardenArr, space)', function () {
        it('checks if gardenArr is array', function () {
            try {
                flowerShop.sellFlowers('', 5);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('checks if space is integer && lower than 0', function () {
            try {
                flowerShop.sellFlowers([], 1.2);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('checks if space is lower than 0', function () {
            try {
                flowerShop.sellFlowers([], 0);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('checks if space is greater than gardenArr.length', function () {
            try {
                flowerShop.sellFlowers([2, 3], 2);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('check happy path', function () {
            const garden = ['sunFlower', 'dunnoAnyFlower', 'somethingFlower'];
            const soldFlowers = garden.slice(0, -1);
            expect(flowerShop.sellFlowers(garden, 2)).to.equal(soldFlowers.join(' / '));
        });
    });
});
