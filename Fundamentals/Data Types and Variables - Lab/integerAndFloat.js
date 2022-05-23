function float(num1, num2, num3) {
  let result = num1 + num2 + num3;
  console.log(result % 1 === 0 ? `${result} - Integer` : `${result} - Float`);
}
float(100, 200, 303);
