function generateSequence(n, k) {
    // create the array with initial value of 1
    const result = [1]

    // loop with the length of the given function parameter
    for (let i = 1; i < n; i++) {

        // create the start of the new array with the numbers we need to sum
        let start = Math.max(0, i - k)

        const threeElements = result.slice(start)
        const sum = threeElements.reduce((a, b) => a + b)

        // push the sum
        result.push(sum)
    }

    // return the result
    return result
}
generateSequence(8, 2)
