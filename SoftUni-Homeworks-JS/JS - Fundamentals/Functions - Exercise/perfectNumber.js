function checkPerfectNum(num) {
  let arrayNumbers = [
    2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607, 1279, 2203, 2281,
    3217, 4253, 4423, 9689, 9941, 11213, 19937, 21701, 23209, 44497, 86243,
    110503, 132049, 216091, 756839, 859433, 1257787, 1398269, 2976221, 3021377,
    6972593, 13466917, 20996011, 24036583, 25964951, 30402457, 32582657,
  ];

  let result = 0;
  let isValid = false;

  for (let i = 0; i < arrayNumbers.length; i++) {
    let exponent = arrayNumbers[i] - 1;
    result = Math.pow(2, exponent) * (Math.pow(2, arrayNumbers[i]) - 1);
    if (result === num) {
      isValid = true;
      break;
    }
  }
  
  if (isValid) {
    console.log('We have a perfect number!');
  } else {
    console.log("It's not so perfect.");
  }
}
checkPerfectNum(1236498);
