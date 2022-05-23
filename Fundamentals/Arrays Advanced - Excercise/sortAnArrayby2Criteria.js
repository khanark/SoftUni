function sortArray(arr) {
  let sorted = arr.sort((a, b) => {
    if (a.length - b.length != 0) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b);
    }
  });
  console.log(sorted.join('\n'));
}
sortArray(['test', 'Deny', 'omen', 'Default']);
