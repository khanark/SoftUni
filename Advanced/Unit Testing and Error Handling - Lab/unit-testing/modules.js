// test file: ./sumNumbers.test.js
function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}

// test file: ./rgbToHexColor.test.js
function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || red < 0 || red > 255) {
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || green < 0 || green > 255) {
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || blue < 0 || blue > 255) {
        return undefined; // Blue value is invalid
    }
    return (
        '#' +
        ('0' + red.toString(16).toUpperCase()).slice(-2) +
        ('0' + green.toString(16).toUpperCase()).slice(-2) +
        ('0' + blue.toString(16).toUpperCase()).slice(-2)
    );
}

// test file: ./addSubtract.test.js
function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        },
    };
}
const calculator = createCalculator();
const value = calculator.get() + 2;
console.log(value == calculator.get());

// test file: ./addSubtract.test.js
function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = JSON.stringify(arr) == JSON.stringify(reversed);
    return equal;
}
module.exports = {
    sum,
    rgbToHexColor,
    createCalculator,
    isSymmetric,
};
