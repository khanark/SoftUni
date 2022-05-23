function betweenNumbers(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let operator = input[2];
  let result;
  let evenOr = "odd";
  let residue;

  switch (operator) {
    case "+":
      result = num1 + num2;
      if (result % 2 === 0) {
        evenOr = "even";
      }
      console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOr}`);
      break;
    case "-":
      result = num1 - num2;
      if (result % 2 === 0) {
        evenOr = "even";
      }
      console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOr}`);
      break;
    case "*":
      result = num1 * num2;
      if (result % 2 === 0) {
        evenOr = "even";
      }
      console.log(`${num1} ${operator} ${num2} = ${result} - ${evenOr}`);
      break;
    case "/":
      result = num1 / num2;
      if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
      } else {
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
      }
      break;
    case "%":
      residue = num1 % num2;
      if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
      } else {
        console.log(`${num1} % ${num2} = ${residue}`);
      }
      break;
  }
}
