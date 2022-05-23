function printCommonElement(arr1, arr2) {

  for (let element of arr1) {
    for (let element1 of arr2) {
      if (element === element1) {
        console.log(element);
      }
    }
  }
}
printCommonElement(
  ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
  ['s', 'o', 'c', 'i', 'a', 'l']
);
