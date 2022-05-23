function solve3(arr) {
  let maxNumber = arr[0];

  let result = arr.filter(number => {
    if (number >= maxNumber) {
      maxNumber = number;
    }
    return number >= maxNumber;
  });
  console.log(result.join(' '));
}
solve3([1, 3, 8, 4, 10, 12, 3, 2, 24]);
