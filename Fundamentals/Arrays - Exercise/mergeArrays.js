function merge(arr1, arr2) {
  let myArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let element1 = arr1[i];
    let element2 = arr2[i];

    if (i % 2 === 0) {
      myArr.push(Number(element1) + Number(element2));
    } else {
      myArr.push(element1 + element2);
    }
  }

  console.log(myArr.join(' - '));
}
merge(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);
