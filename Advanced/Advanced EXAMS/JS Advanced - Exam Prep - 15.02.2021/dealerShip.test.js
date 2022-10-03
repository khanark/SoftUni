const dealership = require('./dealership.js');
const { expect } = require('chai');

describe('dealerShip Object', function () {
  describe('newCarCost(oldCarModel, newCarPrice)', function () {
    it('test if the oldCarModel is present in the object and if so return the finalPrice', function () {
      expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
    });

    it('test if the oldCarModel is NOT present in the objcet and return the new CarPrice', function () {
      expect(dealership.newCarCost('Ford Fiesta 2003', 20000)).to.equal(20000);
    });
  });

  describe('carEquipment(extrasArr, indexArr)', function () {
    it('return the selected extras array', function () {
      expect(
        dealership.carEquipment(
          ['Aire condicionado', 'Climatronic', 'Central locker'],
          [0, 2]
        )
      ).to.deep.equal(['Aire condicionado', 'Central locker']);
    });
  });

  describe('euroCategory(category)', function () {
    it('test if category is bigger than or equal to 4 and if so make a discount', function () {
      let price = dealership.newCarCost('Audi A4 B8', 30000);
      let total = price - price * 0.05;

      expect(dealership.euroCategory(4)).to.equal(
        `We have added 5% discount to the final price: ${total}.`
      );
    });

    it('test if category is lower than 4', function () {
      expect(dealership.euroCategory(3)).to.equal(
        'Your euro category is low, so there is no discount from the final price!'
      );
    });
  });
});
