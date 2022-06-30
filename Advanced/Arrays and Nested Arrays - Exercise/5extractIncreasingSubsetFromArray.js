function increasingSubset(arr) {
    // create result array with a single start element inside of it
    const result = [arr[0]]

    // take the first element of the result array as the current biggest one
    let currentBiggestOne = arr[0]

    // loop the array and implement the logic
    for (let i = 1; i < arr.length; i++) {
        const nextNumber = arr[i]

        if (nextNumber > currentBiggestOne) {
            result.push(nextNumber)
            currentBiggestOne = nextNumber
        }

    }

    // return the result of the function
    return result
}
increasingSubset([1,
    2,
    1,
    3,
    2,
    4]

)