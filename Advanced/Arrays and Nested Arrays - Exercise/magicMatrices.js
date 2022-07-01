function isMagical(arr) {
    // create empty arrays to store the sums
    const rowSums = []
    const colSums = []

    // sum all the rows
    for (const nestedArr of arr) {
        rowSums.push(nestedArr.reduce((a, b) => a + b))
    }

    // sum all the columns
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[j][i]
        }
        colSums.push(sum)
    }

    // take the first element and compare the other elements from the concatenated array
    const elementToCompare = rowSums[0]
    const allValuesArray = rowSums.concat(colSums)

    // print the output
    console.log(allValuesArray.every(el => el == elementToCompare));
}
isMagical([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)