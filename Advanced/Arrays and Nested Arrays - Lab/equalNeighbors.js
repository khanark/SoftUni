function neighborPairs(arr) {
    // create variable to count the equal pairs
    let equalPairs = 0

    // check vertical
    // loop the length of the first nested array
    for (let i = 0; i < arr[0].length; i++) {

        // loop the main array length
        for (let j = 0; j < arr.length; j++) {

            // if the previous element is valid, break
            if (j == arr.length - 1) break

            // check if both elements are equal
            if (arr[j][i] == arr[j + 1][i]) {
                equalPairs++
            }
        }
    }

    // check diagonal
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == arr[i][j + 1]) {
                equalPairs++
            }
        }
    }

    // return the result of the function
    return equalPairs
}
neighborPairs([['test', 'test', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

)