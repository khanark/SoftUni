function renovation(input) {
  let wallHeight = Number(input[0]);
  let wallWidth = Number(input[1]);
  let percentNotPainted = (100 - Number(input[2])) / 100;
  let totalToPaint = wallHeight * wallWidth * 4 * percentNotPainted;
  let index = 3;
  let command = input[index];
  let paintLitters = Number(input[index]);

  while (command !== 'Tired!') {
    totalToPaint -= paintLitters;
    index++;
    command = input[index];
    paintLitters = Number(input[index]);
    if (totalToPaint < 0 || totalToPaint === 0) {
      break;
    }
  }
  
  if (command === 'Tired!') {
    console.log(`${totalToPaint} quadratic m left.`);
  } else if (totalToPaint < 0) {
    console.log(
      `All walls are painted and you have ${Math.abs(
        totalToPaint
      )} l paint left!`
    );
  } else if (totalToPaint === 0) {
    console.log(`All walls are painted! Great job, Pesho!`);
  }
}
renovation(['3', '5', '10', '2', '3', '4', 'Tired!']);
