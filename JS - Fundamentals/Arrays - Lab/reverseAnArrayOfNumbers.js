function reverseArr(initNum, arr) {
  let myArr = [];

  for (let i = initNum - 1; i >= 0; i--) {
    myArr.push(arr[i]);
  }

  console.log(myArr.join(' '));
}
reverseArr(3, [-1, 20, 99, 5]);
