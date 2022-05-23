function repeat(string, count) {
  let printLine = '';
  for (let i = 1; i <= count; i++) {
    printLine += string;
  }
  console.log(printLine);
}
repeat('abc', 3);
