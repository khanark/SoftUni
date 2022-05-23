function printMatrix(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push([]);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[i][j] = n;
    }
  }
  arr.forEach(row => console.log(row.join(' ')));
}
printMatrix(3);
