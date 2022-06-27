function findGreatestDivisor(num1, num2) {
    let result = []

    let lowest = Math.min(num1, num2)

    for (let i = 1; i <= lowest; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            result.push(i)
        }
    }
    console.log(Math.max(...result));
}
findGreatestDivisor(2154, 458)