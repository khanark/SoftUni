function findNeighbors(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr[i].length; j++) {
      let firstElement = arr[i][j];
      let sameArrEl = arr[i][j + 1];

      if (firstElement === sameArrEl) {
        counter++;
      }

      if (arr[i + 1] === undefined) {
        continue;
      }

      for (let k = j; k < arr[i + 1].length; k++) {
        let secondElement = arr[i + 1][k];

        if (firstElement === secondElement && j == k) {
          counter++;
          break;
        }
        break;
      }
    }
  }
  console.log(counter);
}
findNeighbors([
  [2, 2, 5, 7, 4],
  [4, 0, 5, 3, 4],
  [2, 5, 5, 4, 2],
]);
