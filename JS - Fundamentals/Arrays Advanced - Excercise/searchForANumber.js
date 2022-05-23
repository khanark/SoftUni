function search(arr1, arr2) {
  const arrayLength = arr2[0];
  const deleteNumbers = arr2[1];
  const searchNum = arr2[2];

  let editedArray = arr1.slice(0, arrayLength);
  editedArray.splice(0, deleteNumbers);

  let occurs = 0;

  for (let num of editedArray) {
    if (num === searchNum) occurs++;
  }

  console.log(`Number ${searchNum} occurs ${occurs} times.`);
}
search([5, 2, 3, 4, 1, 6], [5, 2, 3]);
search([7, 1, 5, 8, 2, 7], [3, 1, 5]);
