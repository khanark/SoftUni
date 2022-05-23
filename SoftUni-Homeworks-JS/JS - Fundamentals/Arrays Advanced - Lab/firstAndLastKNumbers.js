function printElements(array) {
  let result = [];
  let k = array.shift();
  let firstPart = array.slice(0, k);
  result.push(firstPart);
  let secondPart = array.slice(array.length - k, array.length);
  result.push(secondPart);
  result.map(row => console.log(row.join(' ')));
}
printElements([2, 6, 7, 8]);
