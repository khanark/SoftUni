function suicaseload(input) {
  let trunkSpace = Number(input[0]);
  let index = 1;
  let suicaseSpace = Number(input[index]);
  let command = input[index];
  let counter = 0;
  let hasNoSpace = false;

  while (command !== 'End') {
    if (index % 3 === 0) suicaseSpace *= 1.1;
    trunkSpace -= suicaseSpace;
    if (trunkSpace < 0) {
      hasNoSpace = true;
      break;
    }
    counter++;
    index++;
    suicaseSpace = Number(input[index]);
    command = input[index];
  }
  if (command === 'End') {
    console.log(`Congratulations! All suitcases are loaded!`);
  }
  if (hasNoSpace) {
    console.log(`No more space!`);
  }
  console.log(`Statistic: ${counter} suitcases loaded.`);
}
suicaseload(['550', '100', '252', '72', 'End']);
