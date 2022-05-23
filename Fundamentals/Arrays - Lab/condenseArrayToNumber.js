function condenseArray(arr) {
  let condensed = [];

  while (arr.length != 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      condensed[i] = arr[i] + arr[i + 1];
    }
    arr = condensed;
    condensed = [];
  }

  console.log(arr.join(''));
}
condenseArray([5, 0, 4, 1, 2]);
