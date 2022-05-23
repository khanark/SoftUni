// let array = ['Captain America Borislav Godumov'];
// let printName = array[0];
// console.log(printName.length);
// const calcIndex = function (input) {
//   let counter = 0;
//   for (let i = 0; i <= input.length; i++) {
//     if (input[i] === ' ') {
//       counter++;
//     }
//   }
//   return input.length - counter;
// };
// console.log(calcIndex(array[0]));

// let jonas = {
//   firstName: 'Jonas',
//   lastName: 'Blah',
//   birthYear: 1994,
//   friends: ['Michael', 'Borislav', 'Petko'],
//   hasDriversLicense: false,
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     this.summary = `${this.firstName} is ${this.calcAge()}-years old and has ${
//       this.hasDriversLicense ? 'a' : 'no'
//     } Driver's license!`;
//     return this.summary;
//   },
// };
// console.log(jonas.getSummary());
// let mark = {
//   fullname: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// // };
// let john = {
//   fullname: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// john.calcBMI();
// const compareBMI = function (arg1, arg2) {
//   let msg;
//   if (arg1 > arg2) {
//     msg = `${mark.fullname}'BMI (${mark.bmi.toFixed(2)}) is higher than ${john.fullname}'s (${john.bmi.toFixed(2)})`;
//   } else if (arg2 > arg1) {
//     msg = `${john.fullname}'BMI (${john.bmi.toFixed(2)}) is higher than ${mark.fullname}'s (${mark.bmi.toFixed(2)})`;
//   }
//   return msg;
// };
// console.log(compareBMI(john.bmi, mark.bmi));
// function sumOfNumbers(input) {
//   let printNumber = '' + input[0];
//   let sum = 0;
//   for (let i = 0; i < printNumber.length; i++) {
//     let num = Number(printNumber[i]);
//     sum += num;
//   }
//   console.log(`The sum of the digits is:${sum}`);
// }
// sumOfNumbers(['12']);
// const years = [1994, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   const calcAge = (years) => 2022 - years;
//   ages.push(calcAge(years[i]));
// }
// console.log(ages);
// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// const calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   const average = sum / arr.length;
//   return average;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

const boris = {
  fullName: 'Borislav Aleksiev Godumov',
  country: 'Spain',
  job: 'Basic worker',
  birthYear: 1994,
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};
boris.occupation = 'Freelancer';
console.log(boris.age);
