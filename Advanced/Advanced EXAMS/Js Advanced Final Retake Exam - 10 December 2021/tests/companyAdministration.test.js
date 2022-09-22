const companyAdministration = require('../companyAdministration');
const { expect } = require('chai');

describe('company administration object', function () {
    describe('hiringEmployee(name , position, yearsExperience)', function () {
        it('check position parameter', function () {
            expect(() => companyAdministration.hiringEmployee('Borislav', 'Constructor', 10)).to.throw(
                'We are not looking for workers for this position.'
            );
        });

        it("if position is 'Programmer check years of experience' bigger than 3", function () {
            expect(companyAdministration.hiringEmployee('Borislav', 'Programmer', 4)).to.equal(
                'Borislav was successfully hired for the position Programmer.'
            );
        });

        it("if position is 'Programmer check years of experience' equal to 3", function () {
            expect(companyAdministration.hiringEmployee('Borislav', 'Programmer', 3)).to.equal(
                'Borislav was successfully hired for the position Programmer.'
            );
        });

        it("if position is 'Programmer check years of experience' is less than 3", function () {
            expect(companyAdministration.hiringEmployee('Borislav', 'Programmer', 2)).to.equal(
                'Borislav is not approved for this position.'
            );
        });
    });

    describe('calculateSalary(hours)', function () {
        it('check if type of hours is number', function () {
            expect(() => companyAdministration.calculateSalary('200')).to.throw('Invalid hours');
        });

        it('check if hours is less than 0 (negative number)', function () {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        });

        it('check if hours are more than 160 and apply bonus', function () {
            expect(companyAdministration.calculateSalary(200)).to.equal(200 * 15 + 1000);
        });

        it('check if hours are equal to 160 and do not apply bonus', function () {
            expect(companyAdministration.calculateSalary(160)).to.equal(160 * 15);
        });

        it('check if hours are 0', function () {
            expect(companyAdministration.calculateSalary(0)).to.equal(0 * 15);
        });

        it('check if hours are 10', function () {
            expect(companyAdministration.calculateSalary(10)).to.equal(10 * 15);
        });
    });

    describe('firedEmployee(employees, index)', function () {
        it('test if employees is array', function () {
            expect(() => companyAdministration.firedEmployee('', 3)).to.throw('Invalid input');
        });

        it('test if index is integer', function () {
            expect(() => companyAdministration.firedEmployee([], 3.2)).to.throw('Invalid input');
        });

        it('test if index is number', function () {
            expect(() => companyAdministration.firedEmployee([], '3.2')).to.throw('Invalid input');
        });

        it('test if index is less than 0 (negative number)', function () {
            expect(() => companyAdministration.firedEmployee([], -1)).to.throw('Invalid input');
        });

        it('test if index is equal to employees length', function () {
            const employees = ['Borislav', 'Petya', 'Vlad'];
            expect(() => companyAdministration.firedEmployee(employees, 3)).to.throw('Invalid input');
        });

        it('test if index is more than employees length', function () {
            const employees = ['Borislav', 'Petya', 'Vlad'];
            expect(() => companyAdministration.firedEmployee(employees, 4)).to.throw('Invalid input');
        });

        it('test happy path 1', function () {
            const employees = ['Borislav', 'Petya', 'Vlad'];
            const result = ['Borislav', 'Petya'];
            expect(companyAdministration.firedEmployee(employees, 2)).to.equal(result.join(', '));
        });

        it('test happy path 2', function () {
            const employees = ['Borislav', 'Petya', 'Vlad'];
            const result = ['Petya', 'Vlad'];
            expect(companyAdministration.firedEmployee(employees, 0)).to.equal(result.join(', '));
        });

        it('test happy path 3', function () {
            const employees = ['Borislav'];
            const result = [];
            expect(companyAdministration.firedEmployee(employees, 0)).to.equal(result.join(', '));
        });
    });
});
