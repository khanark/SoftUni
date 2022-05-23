function sum(input) {
  let startNum = Number(input[0]);
  let endNum = Number(input[1]);
  let magicalNum = Number(input[2]);
  let combinationCounter = 0;
  let printLine = '';

  for (let i = startNum; i <= endNum; i++) {
    for (let j = startNum; j <= endNum; j++) {
      combinationCounter++;
      if (i + j === magicalNum) {
        printLine = `(${i} + ${j} = ${magicalNum})`;
        console.log(`Combination N:${combinationCounter} ${printLine}`);
        return;
      } else {
        printLine = `${combinationCounter} combinations - neither equals ${magicalNum}`;
      }
    }
  }
  console.log(printLine);
}
sum(['2', '5', '5']);
