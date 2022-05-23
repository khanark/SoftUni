function processNumbers(array) {
  console.log(
    array
      .filter((x, i) => i % 2 == 1)
      .map(i => i * 2)
      .reverse()
      .join(' ')
  );
}
processNumbers([10, 15, 20, 25]);
