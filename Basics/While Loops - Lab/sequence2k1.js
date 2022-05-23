function sequence2k1(input) {
    let num = Number(input[0]);
    let currentNumber = 1;

    while (currentNumber <= num) {
        console.log(currentNumber);
        currentNumber = currentNumber * 2 + 1;
    }
}
sequence2k1(["3"]);
