function findBiggest(num1, num2, num3) {
  let myArr = [num1, num2, num3];
  let biggestNum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] > biggestNum) {
      biggestNum = myArr[i];
    }
  }
  console.log(biggestNum);
}
findBiggest(-2, 7, 3);
