function findDifference(arr) {
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }

  for (let num of arr) {
    num % 2 === 0 ? (evenSum += num) : (oddSum += num);
  }
  console.log(evenSum - oddSum);
}
findDifference([1, 2, 3, 4, 5, 6]);
