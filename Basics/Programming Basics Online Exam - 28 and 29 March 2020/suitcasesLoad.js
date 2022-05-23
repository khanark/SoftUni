function suitcasesLoad(input) {
  let volume = Number(input[0]);
  let index = 1;
  let caseVolume = Number(input[index]);
  let command = input[index];
  let caseCount = 0;
  let isFull = false;

  while (command !== 'End') {
    caseCount++;
    if (caseCount % 3 === 0 && caseCount != 0) {
      volume -= caseVolume * 1.1;
    } else {
      volume -= caseVolume;
    }
    index++;
    command = input[index];
    caseVolume = Number(input[index]);
    if (volume < 0) {
      caseCount--;
      break;
    }
    if (caseVolume > volume) {
      isFull = true;
      break;
    }
  }
  if (isFull || volume < 0) {
    console.log('No more space!');
    console.log(`Statistic: ${caseCount} suitcases loaded.`);
  } else {
    console.log(`Congratulations! All suitcases are loaded!`);
    console.log(`Statistic: ${caseCount} suitcases loaded.`);
  }
}
suitcasesLoad(['200', '100', '50', '50', 'End']);
