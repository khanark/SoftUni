function sumInterval(n1, n2) {
  let printLine = '';
  let sum = 0;
  for (let i = n1; i <= n2; i++) {
    sum += i;
    printLine += `${i} `;
  }
  console.log(printLine);
  console.log(`Sum: ${sum}`);
}
sumInterval(5, 10);
