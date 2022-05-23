function degustation(input) {
  let index = 0;
  let degustatorsCount = Number(input[index]);
  index++;
  let degustatorName = input[index];
  index++;
  let evaluation = Number(input[index]);
  let command = input[index];
  index++;
  let points = 0;
  let highestScore = 0;
  let printWinner = '';
  let isNumberOne = false;

  for (let i = 1; i <= degustatorsCount; i++) {
    while (command !== 'Stop') {
      points += evaluation;
      if (points > highestScore) {
        isNumberOne = true;
        highestScore = points;
        printWinner = degustatorName;
      }
      evaluation = Number(input[index]);
      command = input[index];
      index++;
    }
    console.log(`${degustatorName} has ${points} points.`);
    if (isNumberOne)  console.log(`${degustatorName} is the new number 1!`);
    degustatorName = input[index];
    index++;
    evaluation = Number(input[index]);
    command = input[index];
    index++;
    points = 0;
    isNumberOne = false;
  }
  console.log(`${printWinner} won competition with ${highestScore} points!`);
}
degustation([
  '2',
  'Chef Angelov',
  '9',
  '9',
  '9',
  'Stop',
  'Chef Rowe',
  '10',
  '10',
  '10',
  '10',
  'Stop',
]);
