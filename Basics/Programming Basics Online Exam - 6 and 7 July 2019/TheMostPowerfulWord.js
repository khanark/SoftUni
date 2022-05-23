function getTheMostPowerfulWord(input) {
  let word = input.shift();
  let valueOfWord = 0;
  let isFound = false;
  let biggestWordValue = 0;
  let printCurrentWord = '';
  
  while (word !== 'End of words') {
    for (let i = 0; i < word.length; i++) {
      valueOfWord += word.charCodeAt(i);
    }
    let currentChar = word.charAt(0).toUpperCase();
    switch (currentChar) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
      case 'Y':
        isFound = true;
        break;
      default:
        isFound = false;
        break;
    }
    if (isFound) {
      valueOfWord = valueOfWord * word.length;
    } else {
      valueOfWord = Math.floor(valueOfWord / word.length);
    }
    if (valueOfWord > biggestWordValue) {
      biggestWordValue = valueOfWord;
      printCurrentWord = word;
    }
    valueOfWord = 0;
    word = input.shift();
  }
  console.log(
    `The most powerful word is ${printCurrentWord} - ${biggestWordValue}`
  );
}
getTheMostPowerfulWord([
  'The',
  'Experience',
  'Most',
  'Powerful',
  'Word',
  'Is',
  'End of words',
]);
