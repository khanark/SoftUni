// function reverse(arr) {
//   console.log(arr.reverse().join(' '));
// }
// reverse(['33', '123', '0', 'dd']);

function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    swapElements(arr, i, arr.length - 1 - i);
  }

  console.log(arr.join(' '));

  function swapElements(arr, i, j) {
    let swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
  }
}
reverse(['33', '123', '0', 'dd', 'bb', 'cc']);
