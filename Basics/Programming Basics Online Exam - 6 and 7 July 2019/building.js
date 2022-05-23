function building(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);
  
  for (let i = floors; i > 0; i--) {
    let printLine = '';
    for (let j = 0; j < rooms; j++) {
      if (i === floors) {
        printLine += `L${i}${j} `;
      } else if (i % 2 === 0) {
        printLine += `O${i}${j} `;
      } else {
        printLine += `A${i}${j} `;
      }
    }
    console.log(printLine);
  }
}
building(['6', '4']);
