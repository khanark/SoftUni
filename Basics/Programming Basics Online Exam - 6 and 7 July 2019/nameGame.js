function nameGame(input) {
  let name = input.shift();
  let points = 0;
  let printFirstPlayer = '';
  let printSecondPlayer = '';
  let highestScore = 0;
  let isHigher = false;
  while (name !== 'Stop') {
    for (let i = 0; i < name.length; i++) {
      let num = Number(input.shift());
      let currentCharValue = name.charCodeAt(i);
      num === currentCharValue ? (points += 10) : (points += 2);
    }
    if (points === highestScore) {
      isHigher = true;
      printSecondPlayer = name;
    }
    if (points > highestScore) {
      highestScore = points;
      printFirstPlayer = name;
    }
    points = 0;
    name = input.shift();
  }
  if (isHigher) {
    console.log(
      `The winner is ${printSecondPlayer} with ${highestScore} points!`
    );
  } else {
    console.log(
      `The winner is ${printFirstPlayer} with ${highestScore} points!`
    );
  }
}
nameGame([
  'Pesho',
  '124',
  '34',
  '111',
  '97',
  '99',
  'Gosho',
  '98',
  '124',
  '88',
  '76',
  '18',
  'Stop',
]);
