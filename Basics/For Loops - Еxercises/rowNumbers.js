function rowNumbers(input) {
    let goalNumber = Number(input[0]);
    let currentNumber = 1;

    while (currentNumber < goalNumber) {
        console.log(currentNumber);
        if (currentNumber < goalNumber) {
            currentNumber = currentNumber * 2 + 1;
        } else {
            break;
        }
    }
}
rowNumbers(["17"]);
