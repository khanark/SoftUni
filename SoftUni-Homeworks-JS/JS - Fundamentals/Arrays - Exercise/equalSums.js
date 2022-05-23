// Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right.

// If there are NO elements to the left/right, their sum is 0.

// Print the index that satisfies the required condition or "no" if there is no such index.

function checkIfExist(arr) {
  // creating varible to sum the first half of the array
  let firstHalf = 0;
  // creating varible to sum the second half of the array
  let secondHalf = 0;
  // creating boolean to check if the first half is equal to the second half
  let isEqual = false;
  // creating a varible to hold the index of i
  let currentIndex = 0;
  // creating a for loop that checks every index to see at which index the condition is met
  for (let i = 0; i < arr.length; i++) {
    // creating another loop to sum the left and the right side of the array
    // -----
    currentIndex = i; // here curreIndex holds the current index of the array
    // -----
    // here we are looping backwards of the current main index to sum the first half 
    for (let k = i; k >= 0; k--) {
      firstHalf += arr[k];
    }
    // here we are looping forwards of the current main index to sum the second half
    for (let j = i; j < arr.length; j++) {
      secondHalf += arr[j];
    }
    // here we check if the first half is equal to the second half and if so we are breaking out of the loop 
    if (firstHalf === secondHalf) {
      isEqual = true;
      break;
    } else {
      // if the condition isnt met we are resseting the values of the first and second half in otder to implement the logic fot the next main index
      firstHalf = 0;
      secondHalf = 0;
    }
  }

  // printing 
  if (isEqual === true) {
    console.log(currentIndex);
  } else {
    console.log('no');
  }
}
checkIfExist([1, 2, 3]);
