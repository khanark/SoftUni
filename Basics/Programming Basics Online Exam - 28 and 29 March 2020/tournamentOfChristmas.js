function tournamentOfChristmas(input) {
  let days = Number(input[0]);
  let index = 1;
  let sport = input[index];
  let command = input[index];
  index++;
  let outcome = input[index];
  let won = 0;
  let wonTotal = 0;
  let lose = 0;
  let loseTotal = 0;
  let money = 0;
  let printMoneyLine = 0;

  for (let i = 1; i <= days; i++) {
    while (command !== 'Finish') {
      if (outcome === 'win') {
        money += 20;
        wonTotal++;
        won++;
      } else {
        loseTotal++;
        lose++;
      }
      index++;
      sport = input[index];
      command = input[index];
      index++;
      outcome = input[index];
    }
    if (won > lose) {
      money *= 1.1;
    }
    printMoneyLine += money;
    money = 0;
    won = 0;
    lose = 0;
    sport = input[index];
    command = input[index];
    index++;
    outcome = input[index];
  }
  if (wonTotal > loseTotal) {
    printMoneyLine *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${printMoneyLine.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${printMoneyLine.toFixed(
        2
      )}`
    );
  }
}

tournamentOfChristmas([
  '3',
  'darts',
  'lose',
  'handball',
  'lose',
  'judo',
  'win',
  'Finish',
  'snooker',
  'lose',
  'swimming',
  'lose',
  'squash',
  'lose',
  'table tennis',
  'win',
  'Finish',
  'volleyball',
  'win',
  'basketball',
  'win',
  'Finish',
]);
