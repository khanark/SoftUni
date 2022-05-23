function findSmallest(num1, num2, num3) {
  let numbers = [num1, num2, num3];
  let smallest = numbers.sort((a, b) => a - b);
  console.log(numbers[0]);
}
findSmallest(2, 5, 3);
