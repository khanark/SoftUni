function tournament(input) {
  let tournamentName = input.shift();
  let tournamentMatches = Number(input.shift());
  let won = 0;
  let lost = 0;
  let totalMatches = 0;

  while (tournamentName !== 'End of tournaments') {
    for (let i = 1; i <= tournamentMatches; i++) {
      let matches = Number(input.shift());
      let firstResult = matches;
      matches = Number(input.shift());
      let secondResult = matches;
      if (firstResult > secondResult) {
        won++;
        console.log(
          `Game ${i} of tournament ${tournamentName}: win with ${Math.abs(
            firstResult - secondResult
          )} points.`
        );
      } else {
        lost++;
        console.log(
          `Game ${i} of tournament ${tournamentName}: lost with ${Math.abs(
            firstResult - secondResult
          )} points.`
        );
      }
    }
    totalMatches += tournamentMatches;
    tournamentName = input.shift();
    tournamentMatches = Number(input.shift());
  }
  const calcPercent = games => (games / totalMatches) * 100;
  console.log(`${calcPercent(won).toFixed(2)}% matches win`);
  console.log(`${calcPercent(lost).toFixed(2)}% matches lost`);
}
tournament([
  'Dunkers',
  '2',
  '75',
  '65',
  '56',
  '73',
  'Fire Girls',
  '3',
  '67',
  '34',
  '83',
  '98',
  '66',
  '45',
  'End of tournaments',
]);
console.log(tournament);
