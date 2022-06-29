function sumDiagonals(arr) {
    // create variables to store the sum
    let sumLeft = 0
    let sumRight = 0

    for (let i = 0; i < arr.length; i++) {
        // left diagonal
        sumLeft += arr[i][i]

        // right diagonal
        sumRight += arr[i][(arr.length - 1) - i]
    }

    // print the output
    console.log(sumLeft + " " + sumRight);
}
sumDiagonals([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
)