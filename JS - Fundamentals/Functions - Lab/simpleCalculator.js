function calc(num1, num2, operator) {
  let multiply = (num1, num2) => num1 * num2;
  let devide = (num1, num2) => num1 / num2;
  let add = (num1, num2) => num1 + num2;
  let sub = (num1, num2) => num1 - num2;

  switch (operator) {
    case 'multiply':
      console.log(multiply(num1, num2));
      break;
    case 'divide':
      console.log(devide(num1, num2));
      break;
    case 'add':
      console.log(add(num1, num2));
      break;
    case 'subtract':
      console.log(sub(num1, num2));
      break;
  }
}
calc(10, 2, '');
