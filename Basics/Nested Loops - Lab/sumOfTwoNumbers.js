function sumOfTwoNumbers(input) {
  const initialNumber = Number(input[0]);
  const endNumber = Number(input[1]);
  const magicalNumber = Number(input[2]);
  let combination = 0;
  let isFound = false;
  for (let i = initialNumber; i <= endNumber; i++) {
    if (isFound) {
      break;
    }
    for (let j = initialNumber; j <= endNumber; j++) {
      combination++;
      if (i + j === magicalNumber) {
        isFound = true;
        console.log(
          `Combination N:${combination} (${i} + ${j} = ${magicalNumber})`
        );
        break;
      }
    }
  }
  if (!isFound) {
    console.log(
      `${combination} combinations - neither equals ${magicalNumber}`
    );
  }
}
sumOfTwoNumbers(["1", "10", "5"]);
