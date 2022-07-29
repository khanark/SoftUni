function solve(arr, func) {
    // create object with functionality
    const cases = {
        asc: arr => (arr = arr.sort((a, b) => a - b)),
        desc: arr => (arr = arr.sort((a, b) => b - a)),
    };

    // return the values
    return cases[func](arr);
}
solve([14, 7, 17, 6, 8], 'desc');
