function printChar(char1, char2) {
  let printChar = '';
  let checkSmaller = (num1, num2) => num1 < num2;
  let firstValue = char1.charCodeAt(0);
  let secondValue = char2.charCodeAt(0);

  if (checkSmaller(firstValue, secondValue)) {
    for (let i = firstValue + 1; i < secondValue; i++) {
      printChar += `${String.fromCharCode(i)} `;
    }
  } else {
    for (let i = secondValue + 1; i < firstValue; i++) {
      printChar += `${String.fromCharCode(i)} `;
    }
  }
  console.log(printChar);
}
printChar('C', '#');
