function charflow(input) {
  let index = 0;
  let currentChar = input[index];
  let printLine = '';
  let isFoundC = false;
  let isFoundN = false;
  let isFoundO = false;
  let allWords = '';

  while (currentChar !== 'End') {
    if (
      (currentChar.charCodeAt() >= 65 && currentChar.charCodeAt() <= 90) ||
      (currentChar.charCodeAt() >= 97 && currentChar.charCodeAt() <= 122)
    ) {
      switch (currentChar) {
        case 'c':
          if (isFoundC) printLine += currentChar
          isFoundC = true;
          break;
        case 'o':
          if (isFoundO) printLine += currentChar
          isFoundO = true;
          break;
        case 'n':
          if (isFoundN) printLine += currentChar;
          isFoundN = true;
          break;
        default:
          printLine += currentChar;
          break;
      }
      if (isFoundC && isFoundN && isFoundO) {
        printLine += ' ';
        allWords = printLine;
        isFoundC = false;
        isFoundN = false;
        isFoundO = false;
      }
      index++;
      currentChar = input[index];
    } else {
      index++;
      currentChar = input[index];
    }
  }
  console.log(allWords);
}
charflow(['%','!','c','^','B','`','o','%','o','o','M',')','{','n','A','D','End',
]);
