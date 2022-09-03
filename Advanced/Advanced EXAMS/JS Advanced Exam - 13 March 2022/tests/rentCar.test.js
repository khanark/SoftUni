const rentCar = require('../rentCar');
const { expect } = require('chai');

describe('rentCar object', () => {
    describe('searchCar(shop,model)', () => {
        it('test if shop is array', () => {
            try {
                rentCar.searchCar('', 'Toyota Corolla');
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
            try {
                rentCar.searchCar({}, 'Toyota Corolla');
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });

        it('test if model is type of string', () => {
            try {
                rentCar.searchCar([], 1);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });

        it('test happy path 1 car', () => {
            const catalog = ['Toyota', 'Ford', 'Mercedes', 'Opel'];
            expect(rentCar.searchCar(catalog, 'Ford')).to.equal(
                `There is 1 car of model Ford in the catalog!`
            );
        });

        it('test happy path 2 cars', () => {
            const catalog = ['Toyota', 'Ford', 'Mercedes', 'Opel', 'Opel'];
            expect(rentCar.searchCar(catalog, 'Opel')).to.equal(
                `There is 2 car of model Opel in the catalog!`
            );
        });

        it('test if there is no car found', () => {
            const catalog = ['Toyota', 'Ford', 'Mercedes', 'Opel'];
            try {
                rentCar.searchCar(catalog, 'BMW');
            } catch (err) {
                expect(err.message).to.equal(
                    `There are no such models in the catalog!`
                );
            }
        });
    });

    describe('calculatePriceOfCar(model, days)', () => {
        it('test if model is string', () => {
            try {
                rentCar.calculatePriceOfCar(1, 2);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });

        it('test if days is type of number and is an integer', () => {
            try {
                rentCar.calculatePriceOfCar('Ford', 1.2);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });

        it('test happy path', () => {
            const cost = 36 * 5;
            expect(rentCar.calculatePriceOfCar('Audi', 5)).to.equal(
                `You choose Audi and it will cost $180!`
            );
        });
        it('test happy path with zero value', () => {
            const cost = 36 * 0;
            expect(rentCar.calculatePriceOfCar('Audi', 0)).to.equal(
                `You choose Audi and it will cost $0!`
            );
        });

        it('test if the car catalogue has no such model in it', () => {
            try {
                rentCar.calculatePriceOfCar('Kia', 10);
            } catch (err) {
                expect(err.message).to.equal('No such model in the catalog!');
            }
        });
    });

    describe('checkBudged(costPerDay, days, budged)', () => {
        it('test if costPerDay parameter is integer', () => {
            try {
                rentCar.checkBudget(1.2, 5, 20000);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('test if costPerDay parameter is integer string', () => {
            try {
                rentCar.checkBudget("1.2", 5, 20000);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('test if days parameter is integer', () => {
            try {
                rentCar.checkBudget(200, 2.3, 20000);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('test if days parameter is integer string', () => {
            try {
                rentCar.checkBudget(200, "2.3", 20000);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('test if budged parameter is integer', () => {
            try {
                rentCar.checkBudget(200, 4, 20000.2);
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });
        it('test if budged parameter is integer string', () => {
            try {
                rentCar.checkBudget(200, 4, "20000.2");
            } catch (err) {
                expect(err.message).to.equal('Invalid input!');
            }
        });

        it('test happy path (You rent a car)', () => {
            const cost = 500 * 100;
            expect(rentCar.checkBudget(200, 3, 50000)).to.equal(
                'You rent a car!'
            );
            expect(rentCar.checkBudget(500, 100, 50000)).to.equal(
                'You rent a car!'
            );
        });

        it('test happy path (You need a bigger budged!)', () => {
            expect(rentCar.checkBudget(600, 100, 50000)).to.equal(
                'You need a bigger budget!'
            );
        });
    });
});
