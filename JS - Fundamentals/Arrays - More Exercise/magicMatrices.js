function matrix(arr) {
  let rows = [];
  let cols = [];
  let sumRows = 0;
  let sumCols = 0;
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    // cols sum --------------------------------
    for (let k = 0; k < arr[i].length; k++) {
      if (cols.length >= arr.length) break;
      let counter = arr.length;
      for (let j = 0; j < counter; j++) {
        sumCols += arr[j][k];
      }
      cols.push(sumCols);
      sumCols = 0;
    }
    // rows sum --------------------------------
    for (let j = 0; j < arr[i].length; j++) {
      sumRows += arr[i][j];
    }
    rows.push(sumRows);
    sumRows = 0;
  }
  // checks for equality
  for (let i = 0; i < rows.length; i++) {
    let rowNum = rows[i];
    for (let j = 0; j < cols.length; j++) {
      let colNum = cols[j];
      if (rowNum !== colNum) {
        flag = false;
        break;
      }
    }
    if (flag === false) break;
  }
  console.log(flag);
}
matrix([
  [1, 0, 0],
  [0, -1, 0],
  [0, 0, -1],
]);
