function printBiggerHalf(arr) {
    // sort the array by ascending order and then take the bigger half
    const result = arr.sort((a, b) => a - b).slice(arr.length / 2)

    // return the result of the function
    return result
}
printBiggerHalf([3, 19, 14, 7, 2, 19, 6])