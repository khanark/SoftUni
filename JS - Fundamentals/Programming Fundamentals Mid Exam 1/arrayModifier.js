function modifyArr(arr) {
  const myArr = arr.shift().split(' ').map(Number);

  function swap(el1, el2) {
    const swap = myArr[el1];
    myArr[el1] = myArr[el2];
    myArr[el2] = swap;
  }

  function multiply(el1, el2) {
    // let secondNumber = myArr.splice(el2, 1);
    myArr[el1] *= myArr[el2];
  }

  function decrease() {
    for (let i = 0; i < myArr.length; i++) {
      myArr[i]--;
    }
  }

  for (const commands of arr) {
    let [command, index1, index2] = commands.split(' ');
    index1 = Number(index1);
    index2 = Number(index2);

    switch (command) {
      case 'swap':
        swap(index1, index2);
        break;
      case 'multiply':
        multiply(index1, index2);
        break;
      case 'decrease':
        decrease();
    }
  }
  console.log(myArr.join(', '));
}
modifyArr([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end',
]);
