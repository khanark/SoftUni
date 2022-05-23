function devideFactorials(num1, num2) {
  const calcFactorial = n => {
    if (n === 1 || n === 0) {
      return 1;
    } else {
      return n * calcFactorial(n - 1);
    }
  };
  let calculatedNum1 = calcFactorial(num1)
  let calculatedNum2 = calcFactorial(num2)
  
  console.log((calculatedNum1 / calculatedNum2).toFixed(2));
}
devideFactorials(6, 2);