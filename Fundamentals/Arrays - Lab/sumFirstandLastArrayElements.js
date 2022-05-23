function sumFirstLast(arr) {
  // let sum = arr[0] + arr[arr.length - 1];
  let first = arr.shift();
  let second = arr.pop();
  console.log(first + second);
}
sumFirstLast([10, 17, 22, 33]);
