const { expect } = require('chai');
const { rgbToHexColor } = require('../modules');

// testing possible outcomes
describe('testing colors', () => {
    it('test red', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });
    it('test green', () => {
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });
    it('test blue range', () => {
        expect(rgbToHexColor(0, 0, -1)).to.equal(undefined);
    });
    it('range test first argument', () => {
        expect(rgbToHexColor(266, 0, 0)).to.equal(undefined);
    });
    it('range test second argument', () => {
        expect(rgbToHexColor(0, 266, 0)).to.equal(undefined);
    });
    it('range test third argument', () => {
        expect(rgbToHexColor(0, 0, 266)).to.equal(undefined);
    });
    it('test argument type one', () => {
        expect(rgbToHexColor('255', 0, 0)).to.equal(undefined);
    });
    it('test argument type two', () => {
        expect(rgbToHexColor(0, '225', 0)).to.equal(undefined);
    });
    it('test argument type three', () => {
        expect(rgbToHexColor(0, 0, '255')).to.equal(undefined);
    });
    it('test argument count', () => {
        expect(rgbToHexColor(255)).to.equal(undefined);
    });
});
