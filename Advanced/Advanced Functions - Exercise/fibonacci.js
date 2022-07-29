function getFibonator() {
    let [currentNumber, nextNumber] = [0, 1];

    function solve() {
        let sum = currentNumber + nextNumber;
        currentNumber = nextNumber;
        nextNumber = sum;
        return currentNumber;
    }
    return solve;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
