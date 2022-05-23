function diagonalAttack(arr) {
  let firstDiag = 0;
  let secondDiag = arr.length - 1;
  let result = [];
  let sumDiagOne = 0;
  let sumDiagTwo = 0;

  for (let i = 0; i < arr.length; i++) {
    let split = arr[i].split(' ');
    result.push(split);
  }

  for (let i = 0; i < result.length; i++) {
    sumDiagOne += Number(result[i][firstDiag]);
    sumDiagTwo += Number(result[secondDiag][i]);
    firstDiag++;
    secondDiag--;
  }

  firstDiag = 0;
  secondDiag = result.length - 1;
  
  if (sumDiagOne === sumDiagTwo) {
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        if (j !== firstDiag && j !== secondDiag) {
          result[i][j] = sumDiagOne;
        }
      }
      firstDiag++;
      secondDiag--;
    }
  }
  result.forEach(row => console.log(row.join(' ')));
}
diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']
);
