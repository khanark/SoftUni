function spotIndicator(input) {
  let firstSector = 'A'.charCodeAt();
  let lastSector = input[0].charCodeAt();
  let rows = Number(input[1]);
  let spacesOddRow = Number(input[2]) + 'a'.charCodeAt();
  let printedCounter = 0;

  for (let i = firstSector; i <= lastSector; i++) {
    if (i != firstSector) rows += 1;
    for (let j = 1; j <= rows; j++) {
      if (j % 2 === 1) {
        for (let k = 'a'.charCodeAt(); k < spacesOddRow; k++) {
          console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`);
          printedCounter++;
        }
      } else {
        for (let k = 'a'.charCodeAt(); k < spacesOddRow + 2; k++) {
          console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`);
          printedCounter++;
        }
      }
    }
  }
  console.log(printedCounter);
}
spotIndicator(['B', '3', '2']);
