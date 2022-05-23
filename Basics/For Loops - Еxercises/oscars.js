function oscars(input) {
  let index = 0;
  let actorName = input[index];
  index++;
  let juryPoints = Number(input[index]);
  index++;
  let juryCount = Number(input[index]);
  index++;
  let isNominee = false;

  for (let i = 1; i <= juryCount; i++) {
    let name = input[index];
    index++;
    let tempPoints = Number(input[index]);
    index++;
    juryPoints += (name.length * tempPoints) / 2;
    let points = 0;
    points += juryPoints;
    if (points > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${juryPoints.toFixed(
          1
        )}!`
      );
      isNominee = true;
      break;
    }
  }
  if (!isNominee) {
    let diff = Math.abs(1250.5 - juryPoints);
    console.log(`"Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
  }
}
oscars([
  'Zahari Baharov',
  '205',
  '4',
  'Johnny Depp',
  '45',
  'Will Smith',
  '29',
  'Jet Lee',
  '10',
  'Matthew Mcconaughey',
  '39',
]);
