function printEl(arr) {
  let step = parseInt(arr.pop());
  let newArr = [];

  for (let i = 0; i < arr.length; i += step) {
    newArr.push(arr[i]);
  }
  console.log(newArr.join(' '));
}
printEl(['dsa', 'asd', 'test', 'test', '2']);
