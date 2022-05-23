function walking(input) {
  let goalSteps = 10000;
  let index = 0;
  let action = input[index];
  let steps = Number(input[index]);
  let currentSteps = 0;

  while (currentSteps < goalSteps) {
    if (action === "Going home") {
      index++;
      steps = Number(input[index]);
      currentSteps += steps;
      if (currentSteps >= steps) {
        break;
      }
    }

    currentSteps += steps;
    index++;
    action = input[index];
    steps = Number(input[index]);
  }
  let diff = Math.abs(currentSteps - goalSteps);
  if (currentSteps >= goalSteps) {
    console.log(`Goal reached! Good job!\n${diff} steps over the goal!`);
  } else {
    console.log(`${diff} more steps to reach goal.`);
  }
}
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
