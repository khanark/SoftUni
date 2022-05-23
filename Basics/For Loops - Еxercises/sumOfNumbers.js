
function sumOfNumbers(input) {
    let goalNumber = Number(input[0])
    let currentSum = 0
    let index = 1
    let currentNumber = Number(input[index])

    while (currentSum <= goalNumber) {
        currentSum += currentNumber
        index++
        currentNumber = Number(input[index])
    }
    console.log(currentSum)
}
sumOfNumbers(["100",
    "10",
    "20",
    "32",
    "150"])
