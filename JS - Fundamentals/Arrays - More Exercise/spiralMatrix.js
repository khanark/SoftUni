function matrix(n1, n2) {
  let startRow = 0;
  let endRow = n1 - 1;
  let startCol = 0;
  let endCol = n2 - 1;
  let counter = 1;

  let result = [];

  for (let i = 0; i < n1; i++) {
    result.push([]);
  }

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result[i][endCol] = counter;
      counter++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      result[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }
  result.forEach(row => console.log(row.join(' ')));
}
matrix(5, 5);
