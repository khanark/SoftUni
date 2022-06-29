function sortNumbers(arr) {
    // create empty array to store the result
    const result = []

    // loop and implement the following logic
    for (const num of arr) {
        if (num >= 0) {
            result.push(num)
        } else {
            result.unshift(num)
        }
    }

    // print the output
    result.forEach(el => console.log(el))
}
sortNumbers([3, -2, 0, -1])