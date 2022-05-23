function tournament(input) {
  let days = Number(input[0]);
  let index = 1;
  let sport = input[index];
  index++;
  let result = input[index];
  let sum = 0;
  let winCount = 0;
  let loseCount = 0;
  let winTotal = 0;
  let loseTotal = 0;
  let sumTotal = 0;

  for (let i = 1; i <= days; i++) {
    while (sport !== 'Finish') {
      switch (result) {
        case 'win':
          sum += 20;
          winCount++;
          break;
        default:
          loseCount++;
          break;
      }
      index++;
      sport = input[index];
      index++;
      result = input[index];
    }
    if (winCount > loseCount) {
      sum *= 1.1;
    }
    sumTotal += sum;
    winTotal += winCount;
    loseTotal += loseCount;
    sport = input[index];
    index++;
    result = input[index];
    winCount = 0;
    loseCount = 0;
    sum = 0;
  }
  if (winTotal > loseTotal) {
    sumTotal *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${sumTotal.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${sumTotal.toFixed(2)}`
    );
  }
}
tournament(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])
