function manipulateArray(arr) {
  let manipulateArr = arr.shift().split(' ').map(Number);

  for (let i = 0; i < arr.length; i++) {
    let [commands, firstNumber, secondNumber] = arr[i].split(' ');
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    switch (commands) {
      case 'Add':
        add(firstNumber);
        break;
      case 'Remove':
        remove(firstNumber);
        break;
      case 'RemoveAt':
        removeAt(firstNumber);
        break;
      case 'Insert':
        insertAt(firstNumber, secondNumber);
        break;
    }
  }
  function add(el) {
    manipulateArr.push(el);
  }
  function remove(num) {
    manipulateArr = manipulateArr.filter(el => el !== num);
  }
  function removeAt(index) {
    manipulateArr.splice(index, 1);
  }
  function insertAt(num, index) {
    manipulateArr.splice(index, 0, num);
  }
  console.log(manipulateArr.join(' '));
}
manipulateArray([
  '4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3',
]);
