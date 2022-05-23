function printPalindrome(arr) {
  function isPalindrome(number) {
    let startNum = number;
    let endNum = Number(number.toString().split('').reverse().join(''));

    if (startNum == endNum) {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    console.log(isPalindrome(currentNumber));
  }
}
printPalindrome([123, 323, 421, 121]);