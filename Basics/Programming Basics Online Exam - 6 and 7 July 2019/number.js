function number(input) {
  let startNumber = Number(input[0]);
  let endNumber = Number(input[1]);
  let printNumber = '';

  for (let i = startNumber; i <= endNumber; i++) {
    for (let j = startNumber; j <= endNumber; j++) {
      for (let k = startNumber; k <= endNumber; k++) {
        for (let l = startNumber; l <= endNumber; l++) {
          let result = j + k;
          if (i % 2 === 0) {
            if (l % 2 == 1 && i > l && result % 2 === 0) {
              printNumber += `${i}${j}${k}${l} `;
            } else {
              continue;
            }
          } else if (i % 2 === 1) {
            if (l % 2 == 0 && i > l && result % 2 === 0) {
              printNumber += `${i}${j}${k}${l} `;
            }
          } else {
            continue;
          }
        }
      }
    }
  }
  console.log(printNumber);
}
number(['3', '5']);
