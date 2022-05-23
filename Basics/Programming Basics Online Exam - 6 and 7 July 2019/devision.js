function percentages(input) {
  let num = Number(input.shift());
  let paragraphs = [0, 0, 0];
  for (let i = 0; i < num; i++) {
    let numsArray = Number(input.shift());
    if (numsArray % 2 === 0) paragraphs[0]++;
    if (numsArray % 3 === 0) paragraphs[1]++;
    if (numsArray % 4 === 0) paragraphs[2]++;
  }
  const calcPercent = (paragraph) => (paragraph / num) * 100;
  for (let i = 0; i < 3; i++) {
    console.log(`${calcPercent(paragraphs[i]).toFixed(2)}%`);
  }
}
percentages([
  '10',
  '680',
  '2',
  '600',
  '200',
  '800',
  '799',
  '199',
  '46',
  '128',
  '65',
]);
