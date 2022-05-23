function generatePass(input) {
  let firstEndNumber = Number(input[0]);
  let secondEndNumber = Number(input[1]);
  let totalCombinations = Number(input[2]);
  let a = 35;
  let b = 64;
  let x = 1;
  let y = 1;
  let a1 = 35;
  let b1 = 64;
  let combinationCounter = 0;
  let printPasswords = '';

  for (let i = 1; i <= firstEndNumber; i++) {
    for (let j = 1; j <= secondEndNumber; j++) {
      if (a > 55) a = 35;
      if (b > 96) b = 64;
      if (b1 > 96) b1 = 64;
      if (a1 > 55) a1 = 35;
      printPasswords += `${String.fromCharCode(a)}${String.fromCharCode(
        b
      )}${x}${y}${String.fromCharCode(b1)}${String.fromCharCode(a1)}|`;
      a++;
      b++;
      y++;
      a1++;
      b1++;
      combinationCounter++;
      if (combinationCounter >= totalCombinations) {
        console.log(printPasswords);
        return;
      }
    }
    x++;
    y = 1;
  }
  console.log(printPasswords);
}
generatePass(['20', '50', '10']);
