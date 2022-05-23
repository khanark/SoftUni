function primeNonPrime(input) {
    let index = 0;
    let number = Number(input[index]);
    let command = input[index];
    let isPrime = true;
    let isNegative = true;
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== 'stop') {
        if (number > 1) {
            isPrime = true;
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                }
            }
        }
        if (number < 0) {
            console.log('Number is negative.');
            index++;
            number = Number(input[index]);
            command = input[index];
            continue;
        }
        if (isPrime) {
            primeSum += number;
        } else if (isPrime === false) {
            nonPrimeSum += number;
        }
        index++;
        number = Number(input[index]);
        command = input[index];
    }
    console.log(
        `Sum of all prime numbers is: ${primeSum}\nSum of all non prime numbers is: ${nonPrimeSum}`
    );
}
primeNonPrime(['30', '83', '33', '-1', '20', 'stop']);
