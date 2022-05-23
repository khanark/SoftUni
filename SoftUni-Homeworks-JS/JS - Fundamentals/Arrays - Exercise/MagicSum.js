// Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.
function printPairs(arr, magicNum) {
  // creating a loop to get first Number
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];
    // creating a loop to get secound Number
    for (let j = i + 1; j < magicNum; j++) {
      let num2 = arr[j];
      // checking if the sum of the two numbers equals the magic number and if so printing on the console
      if (num1 + num2 === magicNum) {
        console.log(`${num1} ${num2}`);
      }
    }
  }
}
printPairs([1, 2, 3, 4, 5, 6], 6);
