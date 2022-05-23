function moving(input) {
  const totalCubicMeters = Number(input[0]) * Number(input[1]) * Number(input[2]);
  let index = 3;
  let boxesFromArray = Number(input[index]);
  let action = input[index];
  let boxSum = 0;
  let isValid = true;

  while (boxSum <= totalCubicMeters) {
    if (action === "Done") {
      isValid = false;
      break;
    }
    boxSum += boxesFromArray;
    index++;
    boxesFromArray = Number(input[index]);
    action = input[index];
  }
  const diff = Math.abs(boxSum - totalCubicMeters);
  if (!isValid) {
    console.log(`${diff} Cubic meters left.`);
  } else {
    console.log(`No more free space! You need ${diff} Cubic meters more.
      `);
  }
}
moving(["10", "1", "2", "4", "6", "Done"]);
