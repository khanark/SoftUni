function wedding(input) {
  let manCount = Number(input[0]);
  let womenCount = Number(input[1]);
  let tables = Number(input[2]);
  let meeting = 1;
  let printLine = '';

  for (let i = 1; i <= manCount; i++) {
    for (let j = 1; j <= womenCount; j++) {
      meeting++;
      printLine += `(${i} <-> ${j}) `;
      if (meeting > tables) {
        console.log(printLine);
        return;
      }
    }
  }
  console.log(printLine);
}
wedding(['2', '2', '6']);
