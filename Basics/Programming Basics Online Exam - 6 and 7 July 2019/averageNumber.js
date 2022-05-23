function average(arr) {
  let num = Number(arr[0]);
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    let numArray = Number(arr[i]);
    sum += numArray;
  }
  console.log((sum / num).toFixed(2));
}
average(['2', '6', '4']);
