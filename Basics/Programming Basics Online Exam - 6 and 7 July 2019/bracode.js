function barcode(input) {
  let firstNumber = input[0];
  let secondNumber = input[1];
  let printNumber = '';

  for (let i = firstNumber.charAt(0); i <= secondNumber.charAt(0); i++) {
    if (i % 2 === 1) {
      for (let j = firstNumber.charAt(1); j <= secondNumber.charAt(1); j++) {
        if (j % 2 === 1) {
          for (
            let k = firstNumber.charAt(2);
            k <= secondNumber.charAt(2);
            k++
          ) {
            if (k % 2 === 1) {
              for (
                let l = firstNumber.charAt(3);
                l <= secondNumber.charAt(3);
                l++
              ) {
                if (l % 2 === 1) {
                  printNumber += `${i}${j}${k}${l} `;
                }
              }
            }
          }
        }
      }
    }
  }
  console.log(printNumber);
}
barcode(['3256', '6579']);
