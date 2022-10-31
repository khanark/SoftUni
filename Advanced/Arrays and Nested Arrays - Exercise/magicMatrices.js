function isMagical(arr) {
  const initSum = arr[0].reduce((a, b) => a + b, 0);
  let bool = "true";

  arr.forEach((row) => {
    const rowSum = row.reduce((a, b) => a + b, 0);
    if (rowSum !== initSum) {
      bool = "false";
    }
  });

  for (let col = 0; col < arr[0].length; col++) {
    let sumCol = arr.reduce((a, b) => a + b[col], 0);
    if (sumCol != initSum) {
      bool = "false";
    }
  }

  console.log(bool);
}
isMagical([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
