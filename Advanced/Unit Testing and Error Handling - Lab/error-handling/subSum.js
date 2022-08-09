function subSum(arr, start, end) {
    // check if the first argument is array
    if (!Array.isArray(arr)) {
        return NaN;
    }

    // check fi the second argument is in boundaries
    if (start < 0) {
        start = 0;
    }

    // check if the last argument is in boundaries
    if (end > arr.length || end < 0) {
        end = arr.length;
    }

    // output the result
    return arr.slice(start, end + 1).reduce((a, b) => Number(a) + Number(b), 0);
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
