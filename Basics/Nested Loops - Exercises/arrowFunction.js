function uniquePinCodes(input) {
    const firstNumberBorder = Number(input[0]);
    const secondNumberBorder = Number(input[1]);
    const thirdNumberBorder = Number(input[2]);
    let isPrime = false;

    for (let firstNumber = 1; firstNumber <= firstNumberBorder; firstNumber++) {
        if (firstNumber % 2 === 0) {
            console.log(firstNumber);
            for (
                let thirdNumber = 1;
                thirdNumber <= thirdNumberBorder;
                thirdNumber++
            ) {
                if (thirdNumber % 2 === 0) {
                    console.log(thirdNumber);
                }
            }
        }
    }
}
uniquePinCodes('3', '5', '5');
