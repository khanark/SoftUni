const arr = [4, 7, -3, -11, 2, 9, -4, 5, 6, -8, 0, 5];
const arr2 = [0, 7, 8, 16, 29, 37, 99, 108]; // index of 8 = 2, arr2. length = 8, index of last value = 7

function findIndex(value) {
  const arr2 = [0, 7, 8, 16, 29, 37, 99, 108];
  let counter = 0;

  for (let i = 0; i < arr2.length / 2; i++) {
    if (arr2[i] < value) counter++;
  } 
  return counter;
}
console.log(findIndex(8));
