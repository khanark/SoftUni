function letterCombination(input) {
  let letterToBegin = input[0].charCodeAt();
  let letterToEnd = input[1].charCodeAt();
  let thirdLetter = input[2];
  let printLine = '';
  let counter = 0;

  for (let i = letterToBegin; i <= letterToEnd; i++) {
    let c = String.fromCharCode(i);
    if (c != thirdLetter) {
      for (let j = letterToBegin; j <= letterToEnd; j++) {
        let c1 = String.fromCharCode(j);
        if (c1 != thirdLetter) {
          for (let k = letterToBegin; k <= letterToEnd; k++) {
            let c2 = String.fromCharCode(k);
            if (c2 != thirdLetter) {
              counter++;
              printLine += `${c}${c1}${c2} `;
            }
          }
        }
      }
    }
  }
  console.log(`${printLine}${counter}`);
}
letterCombination(['f', 'k', 'h']);
