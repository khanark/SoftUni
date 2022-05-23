function findMaxLeftRight(arr) {
  let array = [];
  let flag = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        flag = false;
        break;
      }
    }

    if (flag === true) {
      array.push(arr[i]);
    }

    flag = true;
  }

  console.log(array.join(' '));
}
findMaxLeftRight([1, 4, 3, 2]);
