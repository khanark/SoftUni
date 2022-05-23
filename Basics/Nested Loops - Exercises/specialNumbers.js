function specialNumbers(input) {
    let number = Number(input[0]);
    let isFound = false;
    let currentNumberList = '';

    for (let i = 1111; i <= 9999; i++) {
        let currentNumber = '' + i;
        let current = '';

        for (let j = 0; j <= currentNumber.length; j++) {
            let currentDigit = Number(currentNumber.charAt(j));
            if (number % currentDigit === 0) {
                isFound = true;
                current += currentDigit;
                if (current === currentNumber) {
                    currentNumberList += `${current} `;
                    break;
                }
            }
        }
    }
    if (isFound) {
        console.log(currentNumberList);
    }
}
specialNumbers(['3']);
