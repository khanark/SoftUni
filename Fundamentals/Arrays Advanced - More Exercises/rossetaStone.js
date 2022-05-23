function rosetta(arr) {
  const linesNumber = Number(arr.shift());
  const template = arr.splice(0, linesNumber).map(el => el.split(' ').map(Number));
  const encodedMatrix = arr.map(row => row.split(' ').map(Number));
  let result = '';

  for (let row = 0; row < encodedMatrix.length; row++) {
    for (let col = 0; col < encodedMatrix[row].length; col++) {
      const column = col % template[0].length;
      const roww = row % linesNumber;
      encodedMatrix[row][col] += template[roww][column];
      const letter = String.fromCharCode((encodedMatrix[row][col] % 27) + 64)
      result += letter === "@" ? " ": letter
    }
  }
  console.log(result);
}
rosetta([
  "1",
"1 3 13",
"12 22 14 13 25 0 4 24 23",
"18 24 2 25 22 0 0 11 18",
"8 25 6 26 8 23 13 4 14",
"14 3 14 10 6 1 6 16 14",
"11 12 2 10 24 2 13 24 0",
"24 24 10 14 15 25 18 24 12",
"4 24 0 8 4 22 19 22 14",
"0 11 18 26 1 19 18 13 15",
"8 15 14 26 24 14 26 24 14"
]);
