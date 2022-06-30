function printElementsFromArray(arr, step) {
    // create the result array to push the valid values
    const result = []

    // loop and get the valid values
    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i])
    }

    // return the result array
    return result
}
printElementsFromArray(['1',
    '2',
    '3',
    '4',
    '5'],
    6
)