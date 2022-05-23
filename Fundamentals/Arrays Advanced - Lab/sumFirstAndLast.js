function sum(array) {
  let firstNumber = Number(array.shift());
  let lastNumber = Number(array.pop());

  let sum = firstNumber + lastNumber;
  console.log(sum);
}
sum(['20', '30', '40']);
