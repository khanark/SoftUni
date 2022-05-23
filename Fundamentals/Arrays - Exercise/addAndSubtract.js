function addAndSubstract(arr) {
  let arrSum = 0;
  let myArrSum = 0;
  let myArr = [];

  for (let num of arr) {
    arrSum += num;
  }

  for (let num of arr) {
    if (num % 2 === 0) {
      myArr.push(num + arr.indexOf(num));
    } else {
      myArr.push(num - arr.indexOf(num));
    }
  }

  for (let num of myArr) {
    myArrSum += num;
  }

  console.log(myArr);
  console.log(arrSum);
  console.log(myArrSum);
}
addAndSubstract([-5, 11, 3, 0, 2]);
