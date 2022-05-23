function power(num, step) {
  let result = 1;
  for (let i = 1; i <= step; i++) {
    result *= num;
  }
  console.log(result);
}
power(2, 8);
