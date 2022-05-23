function isPrime(number) {
  let isPrime = true;
  for (let i = 2; i <= Math.floor(number / 2); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (!isPrime) {
    console.log('false');
  } else {
    console.log('true');
  }
}
isPrime(81);
