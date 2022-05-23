function happyNumbers(input) {
  let num = Number(input[0]);
  let printNum = '';

  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      for (let k = 1; k <= 9; k++) {
        for (let l = 1; l <= 9; l++) {
          let totalFirstTwo = i + j;
          let totalSecondTwo = k + l;
          if (totalFirstTwo === totalSecondTwo) {
            if (num % totalFirstTwo === 0) {
              printNum += `${i}${j}${k}${l} `;
            }
          }
        }
      }
    }
  }
  console.log(printNum);
}
happyNumbers(['24']);
