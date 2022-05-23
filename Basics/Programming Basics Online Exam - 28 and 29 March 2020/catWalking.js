function catWalking(input) {
  let minutesWalkEachDay = Number(input[0]);
  let timesWalkEachDay = Number(input[1]);
  let takenCalories = Number(input[2]);
  let burnedCallories = minutesWalkEachDay * timesWalkEachDay * 5;

  if (burnedCallories >= takenCalories / 2) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${burnedCallories}.`
    );
  } else {
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${burnedCallories}.`
    );
  }
}
catWalking(['30', '3', '600']);
