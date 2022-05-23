function sumOddNumbers(number) {
  let sum = 0;
  let iterationCounter = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
      sum += i;
      iterationCounter++;
      console.log(i);
      if (iterationCounter >= number) break;
    }
  }
  console.log('Sum:' + ' ' + sum);
}
sumOddNumbers(3);
