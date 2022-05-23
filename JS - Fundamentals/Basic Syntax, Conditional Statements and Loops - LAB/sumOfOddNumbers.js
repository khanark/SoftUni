function sumOddNumbers(number) {
  let sum = 0;
  let itterationCounter = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
      sum += i;
      itterationCounter++;
      console.log(i);
      if (itterationCounter >= number) break;
    }
  }
  console.log('Sum:' + ' ' + sum);
}
sumOddNumbers(3);
