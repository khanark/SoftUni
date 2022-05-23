function sortNumbers(numbers) {
  let sorted = numbers.sort((a, b) => b - a);
  for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i]);
  }
}
sortNumbers([-2, 1, 3]);
