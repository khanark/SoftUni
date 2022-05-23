function printDNA(helixLength) {
  let stringHelix = 'ATCGTTAGGG';
  let helixArr = stringHelix.split('');

  // generate the words
  let counter = 0;
  for (let i = 0; i < helixLength; i++) {
    let firstChar = helixArr[counter];
    let secondChar = helixArr[++counter];

    if (i % 4 == 0) {
      console.log(`**${firstChar}${secondChar}**`);
    } else if (i % 4 == 1) {
      console.log(`*${firstChar}--${secondChar}*`);
    } else if (i % 4 == 2) {
      console.log(`${firstChar}----${secondChar}`);
    } else if (i % 4 == 3) {
      console.log(`*${firstChar}--${secondChar}*`);
    }
    counter++;
    if (counter == helixArr.length) {
      counter = 0;
    }
  }
}
printDNA(4);
