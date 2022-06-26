function returnOddEven(number) {
  let num = number.toString();

  const oddSum = numAsString => {
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
      let currentNum = Number(numAsString[i]);
      if (currentNum % 2 === 1) {
        sum += currentNum;
      }
    }
    return sum;
  };

  const evenSum = numAsString => {
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
      let currentNum = Number(numAsString[i]);
      if (currentNum % 2 === 0) {
        sum += currentNum;
      }
    }
    return sum;
  };
  console.log(`Odd sum = ${oddSum(num)}, Even sum = ${evenSum(num)}`);
}
returnOddEven(1000453);
