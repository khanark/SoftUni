function sort(array) {
  let sortedBiggest = array.sort((a, b) => b - a);

  for (let i = 0; i < sortedBiggest.length; i++) {
    if (i % 2 === 0) {
      let lowest = sortedBiggest.pop();
      sortedBiggest.splice(i + 1, 0, lowest);
    }
  }
  console.log(sortedBiggest.join(" "));
}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sort([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
