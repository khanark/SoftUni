function oddEven(input) {
  let index = 0;
  let command = input[index];
  let primeSum = 0;
  let nonPrimeSum = 0;
  let isNegative = false;

  while (command !== 'stop') {
    let num = Number(input[index]);
    let flag = true;
    for (let i = 2; i <= Math.floor(num / 2); i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }
    if (num < 0) {
      isNegative = true;
      index++;
      command = input[index];
      continue;
    }
    flag === true ? (primeSum += num) : (nonPrimeSum += num);
    index++;
    command = input[index];
  }
  if (isNegative) console.log(`Number is negative.`);
  console.log(`Sum of all prime numbers is: ${primeSum}`);
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}
oddEven(['30', '83', '33', '-1', '20', 'stop']);
