function sortNumbers(array) {
  let result = [];
  for (let num of array) {
    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }
  console.log(result.join('\n'));
}
sortNumbers(['7', '-2', '8', '9']);
