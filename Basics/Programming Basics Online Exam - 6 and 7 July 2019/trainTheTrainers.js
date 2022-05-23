function train(input) {
  let juryCount = Number(input[0]);
  let index = 1;
  let taskName = input[index];
  index++;
  let taskSum = 0;
  let finalAssessment = 0;
  let taskCounter = 0;
  const calcAverage = (notes, counter) => (notes / counter).toFixed(2);

  while (taskName !== 'Finish') {
    for (let i = 1; i <= juryCount; i++) {
      let note = Number(input[index]);
      index++;
      taskSum += note;
    }
    finalAssessment += taskSum / juryCount
    console.log(`${taskName} - ${calcAverage(taskSum, juryCount)}.`);
    taskSum = 0;
    taskCounter++;
    taskName = input[index];
    index++;
  }
  console.log(
    `Student's final assessment is ${calcAverage(
      finalAssessment,
      taskCounter
    )}.`
  );
}
train([
  '3',
  'Arrays',
  '4.53',
  '5.23',
  '5.00',
  'Lists',
  '5.83',
  '6.00',
  '5.42',
  'Finish',
]);
