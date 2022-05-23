function printSmallestTwo(array) {
  console.log(
    array
      .sort((a, b) => a - b)
      .slice(0, 2)
      .join(' ')
  );
}
printSmallestTwo([30, 15, 50, 5]);
printSmallestTwo([3, 0, 10, 4, 7, 3]);
