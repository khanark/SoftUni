function checkIfSame(number) {
    const digit = number.toString()[0]
    const allNumbers = number.toString().split("").map(Number)
    
    console.log(allNumbers.every(el => el == digit));
    console.log(allNumbers.reduce((a, b) => a + b, 0));
}
checkIfSame(1234)