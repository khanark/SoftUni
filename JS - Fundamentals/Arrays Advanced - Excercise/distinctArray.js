function removeRepeatingEls(arr) {
  // const filtered = arr.filter((num, index) => arr.indexOf(num) === index);

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let nextNumber = arr[j];
      if (currentNumber === nextNumber) {
        arr.splice(j, 1);
        j = j - 1;
      }
    }
  }
  console.log(arr.join(' '));
}
removeRepeatingEls([7, 8, 9, 7, 2, 3, 4, 1, 2]);
