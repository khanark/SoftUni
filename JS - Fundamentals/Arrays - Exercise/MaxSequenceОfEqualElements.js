// Write a function that finds the longest sequence of equal elements in an array of numbers.

// If several longest sequences exist, print the leftmost one.
function findSequence(arr) {
  let counter = 1;
  let myArr = [];
  let highestSequence = 0;
  let printEl = '';

  // looping through the array
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i]; // getting the first element
    let nextElement = arr[i + 1]; // getting the next element

    // check if the next element is equal to the current element and if not reseting the counter to its default value
    if (currentElement === nextElement) {
      counter++;
    } else {
      counter = 1;
    }

    // guarding the highest value of reps (counter), and the currentElement that is being repeated
    if (counter > highestSequence) {
      highestSequence = counter;
      printEl = currentElement;
    }
  }
  // using a for loop to push the currentElement that has the most repetitions to the newly created array called "myArr" 
  for (let i = 0; i < highestSequence; i++) {
    myArr.push(printEl);
  }
  // printing to the console
  console.log(myArr.join(' '));
}
findSequence([4, 4, 4, 4]);
