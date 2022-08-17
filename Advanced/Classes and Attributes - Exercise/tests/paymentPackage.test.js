const { PaymentPackage } = require('../paymentPackage');
const { expect } = require('chai');

describe('testing payment package', () => {
    describe('check properties', () => {
        let payment;
        beforeEach(() => {
            payment = new PaymentPackage('Boris', 12);
        });
        it('test for _name property', () => {
            expect(payment).to.have.property('_name');
        });
        it('test for _value property', () => {
            expect(payment).to.have.property('_value');
        });
        it('test for _VAT property', () => {
            expect(payment).to.have.property('_VAT');
        });
        it('test for _active property', () => {
            expect(payment).to.have.property('_active');
        });
    });

    describe('check for correct values', () => {
        let payment;
        beforeEach(() => {
            payment = new PaymentPackage('Boris', 12);
        });
        it('test for name value', () => {
            expect(payment.name).to.equal('Boris');
        });
        it('test for value value', () => {
            expect(payment.value).to.equal(12);
        });
        it('test for 0 value', () => {
            payment.value = 0;
            expect(payment.value).to.equal(0);
        });
    });

    describe('check name setter and getter', () => {
        let payment;
        beforeEach(() => {
            payment = new PaymentPackage('Boris', 12);
        });
        it('test setting name to a valid value', () => {
            payment.name = 'Gosho';
            expect(payment.name).to.equal('Gosho');
        });
        it('test setting name to empty string', () => {
            let error = '';
            try {
                payment.name = '';
            } catch (err) {
                error = err.message;
            }
            expect(error).to.equal('Name must be a non-empty string');
        });
        it('test setting name to number instead of string value', () => {
            let error = '';
            try {
                payment.name = 12;
            } catch (err) {
                error = err.message;
            }
            expect(error).to.equal('Name must be a non-empty string');
        });
    });

    describe('check value setter and getter', () => {
        let payment;
        beforeEach(() => {
            payment = new PaymentPackage('Boris', 12);
        });
        it('test setting value to a valid value', () => {
            payment.value = 10;
            expect(payment.value).to.equal(10);
        });
        it('test setting value to negative number', () => {
            let error = '';
            try {
                payment.value = -1;
            } catch (err) {
                error = err.message;
            }
            expect(error).to.equal('Value must be a non-negative number');
        });
        it('test setting value to string instead of number value', () => {
            let error = '';
            try {
                payment.value = '12';
            } catch (err) {
                error = err.message;
            }
            expect(error).to.equal('Value must be a non-negative number');
        });
    });

    describe('check VAT setter and getter', () => {
        let payment;
        beforeEach(() => {
            payment = new PaymentPackage('Boris', 12);
        });
        it('test setting VAT to a valid value', () => {
            payment.VAT = 10;
            expect(payment.VAT).to.equal(10);
        });
        it('test setting VAT to negative number', () => {
            let error = '';
            try {
                payment.VAT = -1;
            } catch (err) {
                error = err.message;
            }
            expect(error).to.equal('VAT must be a non-negative number');
        });
        it('test setting VAT to string instead of number value', () => {
            let error = '';
            try {
                payment.VAT = '12';
            } catch (err) {
                error = err.message;
            }
            expect(error).to.equal('VAT must be a non-negative number');
        });
    });

    describe('check active setter and getter', () => {
        let payment;
        beforeEach(() => {
            payment = new PaymentPackage('Boris', 12);
        });
        it('test setting active to a valid value', () => {
            payment.active = false;
            expect(payment.active).to.be.false;
        });
        it('test setting active to string instead of boolean value', () => {
            let error = '';
            try {
                payment.active = 'true';
            } catch (err) {
                error = err.message;
            }
            expect(error).to.equal('Active status must be a boolean');
        });
    });

    describe('check if toString() returns summary', () => {
        let payment;
        beforeEach(() => {
            payment = new PaymentPackage('Boris', 12);
        });
        it('test if toString() appends "inactive" to the summary', () => {
            payment.active = false;
            expect(payment.toString()).to.equal(
                'Package: Boris (inactive)\n- Value (excl. VAT): 12\n- Value (VAT 20%): 14.399999999999999'
            );
        });
        it('test if toString() does not append anything to the summary if active = true', () => {
            payment.active = true;
            expect(payment.toString()).to.equal(
                'Package: Boris\n- Value (excl. VAT): 12\n- Value (VAT 20%): 14.399999999999999'
            );
        });
    });
});
