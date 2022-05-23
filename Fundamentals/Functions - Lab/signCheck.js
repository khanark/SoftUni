function check(num1,num2,num3) {
  let numbers = [num1,num2,num3];
  const isNegative = number => number < 0;
  let totalNegative = 0;
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (isNegative(number)) {
      totalNegative++;
    }
  }
  console.log(totalNegative % 2 === 0 ? 'Positive' : 'Negative');
}
check(-6, -12, 14);
