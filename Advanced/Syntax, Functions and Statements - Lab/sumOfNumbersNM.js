function sumBetween(n, m) {
    let firstNum = Number(n)
    let secondNum = Number(m)

    let result = 0
    for (let i = firstNum; i <= secondNum; i++) {
        result += i
    }
    console.log(result);
}
sumBetween('1', '5')