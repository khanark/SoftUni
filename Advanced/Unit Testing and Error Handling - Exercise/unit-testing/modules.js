function isOddOrEven(string) {
    if (typeof string !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return 'even';
    }

    return 'odd';
}

function lookupChar(string, index) {
    if (typeof string !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return 'Incorrect index';
    }

    return string.charAt(index);
}

let mathEnforcer = {
    addFive: function (num) {
        if (typeof num !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof num !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return undefined;
        }
        return num1 + num2;
    },
};

module.exports = {
    isOddOrEven,
    lookupChar,
    mathEnforcer,
};
