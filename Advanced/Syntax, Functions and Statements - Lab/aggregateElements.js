function performOperations(arr) {
    const sum = arr.reduce((a, b) => a + b, 0)
    const sumInverse = arr.map(el => 1 / el).reduce((a, b) => a + b, 0)
    const concat = arr.join("")

    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}
performOperations([1, 2, 3])