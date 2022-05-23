function pinCodes(input) {
  let firstNumber = Number(input[0]);
  let secondNumber = Number(input[1]);
  let thirdNumber = Number(input[2]);
  
  for (let i = 1; i <= firstNumber; i++) {
    if (i % 2 === 0) {
      for (let currentNum = 2; currentNum <= secondNumber; currentNum++) {
        let flag = true;
        for (let j = 2; j <= Math.floor(currentNum / 2); j++) {
          if (currentNum % j == 0) {
            flag = false;
            break;
          }
        }
        if (flag === true) {
          for (let k = 1; k <= thirdNumber; k++) {
            if (k % 2 === 0) {
              console.log(`${i} ${currentNum} ${k}`);
            }
          }
        }
      }
    }
  }
}
pinCodes(['3', '5', '5']);
