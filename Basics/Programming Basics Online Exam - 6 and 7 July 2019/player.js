function bestPlayer(input) {
  let index = 0;
  let command = input[index];
  let playerName = input[index];
  index++;
  let scoredGoals = Number(input[index]);
  index++;
  let highestScore = 0;
  let printBestPlayer = '';
  let hasHatTrick = false;

  while (command !== 'END') {
    if (scoredGoals > highestScore) {
      highestScore = scoredGoals;
      printBestPlayer = playerName;
    }
    if (highestScore >= 3) hasHatTrick = true;
    if ( highestScore >= 10) break
    command = input[index]
    playerName = input[index]
    index++
    scoredGoals = Number(input[index])
    index++
  }
  console.log(`${printBestPlayer} is the best player!`);
  if (hasHatTrick) {
    console.log(`He has scored ${highestScore} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${highestScore} goals.`);
  }
}
bestPlayer(["Silva",
"5",
"Harry Kane",
"10"])

