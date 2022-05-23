function unlocking(input) {
  let hundrets = Number(input[0]);
  let tens = Number(input[1]);
  let ones = Number(input[2]);

  for (let i = 1; i <= hundrets; i++) {
    if (i % 2 === 0) {
      for (let currentNumber = 2; currentNumber <= tens; currentNumber++) {
        let flag = true;
        for (let j = 2; j <= Math.floor(currentNumber / 2); j++) {
          if (currentNumber % j === 0) {
            flag = false;
            break;
          }
        }
        if (flag === true) {
          for (let k = 1; k <= ones; k++) {
            if (k % 2 === 0) {
              console.log(`${i} ${currentNumber} ${k}`);
            }
          }
        }
      }
    }
  }
}
unlocking(['8', '2', '8']);
