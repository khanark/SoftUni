function notation(arr) {
  const values = arr.filter((el) => typeof el === 'number');
  const strings = arr.filter((el) => typeof el !== 'number');

  for (let i = 0; i < arr.length; i++) {
    if (values.length - strings.length >= 2) {
      console.log('Error: too many operands!');
      return;
    }
    if (values.length === strings.length) {
      console.log('Error: not enough operands!');
      return;
    }

    if (typeof arr[i] !== 'number') {
      const operator = arr[i];
      const indexToPush = i - 2;
      const operands = arr.splice(i - 2, 2);

      switch (operator) {
        case '+':
          arr[indexToPush] = operands.reduce((a, b) => a + b);
          i = -1;
          break;
        case '-':
          arr[indexToPush] = operands.reduce((a, b) => a - b);
          i = -1;
          break;
        case '*':
          arr[indexToPush] = operands.reduce((a, b) => a * b);
          i = -1;
          break;
        case '/':
          arr[indexToPush] = operands.reduce((a, b) => a / b);
          i = -1;
          break;
      }
    }
  }
  console.log(arr.join());
}
notation([31, 2, '+', 11, '/']);
