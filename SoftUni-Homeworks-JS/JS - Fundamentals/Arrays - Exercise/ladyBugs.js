function ladyBug(arr) {
  const fieldSize = Number(arr.shift());
  const ladyBugIndexes = arr.shift().split(' ');
  let result = [];
  let flag = false;
  // initial field
  for (let i = 0; i < fieldSize; i++) {
    for (let j = 0; j < ladyBugIndexes.length; j++) {
      let bugIndex = Number(ladyBugIndexes[j]);
      if (i === bugIndex) {
        flag = true;
        break;
      }
    }
    flag ? result.push(1) : result.push(0);
    flag = false;
  }
  for (let i = 0; i < arr.length; i++) {
    let token = arr[i].split(' ');
    let currentBugIndex = Number(token[0]);
    let flyIndex = Number(token[2]);
    let command = token[1];

    if (result[currentBugIndex] != 0) {
      switch (command) {
        case 'right':
          if (result[currentBugIndex + flyIndex] != 0) {
            result[currentBugIndex + flyIndex + 1] = 1;
          } else {
            result[currentBugIndex + flyIndex] = 1;
          }
          result[currentBugIndex] = 0;
          break;
        case 'left':
          if (result[currentBugIndex - flyIndex] != 0) {
            result[currentBugIndex - flyIndex - 1] = 1;
          } else {
            result[currentBugIndex - flyIndex] = 1;
          }
          result[currentBugIndex] = 0;
          break;
      }
    }
    result.length = fieldSize;
  }
  console.log(result.join(' '));
}
ladyBug([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
