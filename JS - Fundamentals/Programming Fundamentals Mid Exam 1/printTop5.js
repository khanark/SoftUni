function printTop5(string) {
  const arr = string.split(' ').map(Number);
  const averageNumber = arr.reduce((a, b) => a + b) / arr.length;
  let filteredArr = arr
    .filter(number => number > averageNumber)
    .sort((a, b) => b - a);

  const top5Numbers = filteredArr.filter((el, index) => index < 5);
  
  if (filteredArr.length === 0) {
    console.log('No');
  } else {
    console.log(top5Numbers.join(' '));
  }
}
printTop5('1');
