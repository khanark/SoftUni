function football(input) {
  let name = input[0];
  let games = Number(input[1]);
  let index = 2;
  let winLose = input[index];
  let wonGames = 0;
  let lostGames = 0;
  let draws = 0;
  let points = 0;

  for (let i = 0; i < games; i++) {
    switch (winLose) {
      case 'W':
        wonGames++;
        points += 3;
        break;
      case 'D':
        draws++;
        points += 1;
        break;
      case 'L':
        lostGames++;
        break;
    }
    index++;
    winLose = input[index];
  }
  const calcRate = (typegames) => (typegames / games) * 100;
  if (games <= 0) {
    console.log(`${name} hasn't played any games during this season.`);
  } else {
    console.log(
      `${name} has won ${points} points during this season.\nTotal stats:\n## W: ${wonGames}\n## D: ${draws}\n## L: ${lostGames}\nWin rate: ${calcRate(
        wonGames
      ).toFixed(2)}%`
    );
  }
}
football(['Liverpool', '10', 'W', 'D', 'D', 'W', 'L', 'W', 'D', 'D', 'W', 'W']);
