function maxNumber(input) {
    // Програмата трябва да връща най - голямото число от loop-a
    let index = 0;
    let numbers = Number(input[index]);
    let text = input[index];
    let biggestNumber = Number.MIN_SAFE_INTEGER;

    while (text !== "Stop") {
        if (biggestNumber < numbers) {
            biggestNumber = numbers;
        }
        index++;
        numbers = Number(input[index]);
        text = input[index];
    }
    console.log(biggestNumber);
}
maxNumber(["-1", "-2", "Stop"]);
