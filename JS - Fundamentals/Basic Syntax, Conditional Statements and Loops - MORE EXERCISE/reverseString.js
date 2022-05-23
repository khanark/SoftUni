// two ways of reversing a string

// function reverse(str) {
//   let newString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   console.log(newString);
// }
// reverse('1234');

function reverseStr(str) {
  console.log(str.split('').reverse().join(''));
}
reverseStr('Hello');
