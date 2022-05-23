function numbers(input) {
  let number = Number(input[0]);
  let printNum = '';

  for (let i = 1; i <= 9; i++) {
    if (number % i === 0) {
      for (let j = 1; j <= 9; j++) {
        if (number % j === 0) {
          for (let k = 1; k <= 9; k++) {
            if (number % k === 0) {
              for (let l = 1; l <= 9; l++) {
                if (number % l === 0) {
                  printNum += `${i}${j}${k}${l} `;
                }
              }
            }
          }
        }
      }
    }
  }
  console.log(printNum);
}
numbers(['16']);
