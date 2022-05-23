function calcSpice(startingYield) {
  let days = 0;
  let totalSpice = 0;
  
  while (startingYield > 0) {
    let spices = startingYield;
    days++;
    if (spices >= 26) {
    spices -= 26;
    }
    startingYield -= 10;
    totalSpice += spices;
    if (startingYield < 100) {
      if (totalSpice >= 26) {
      totalSpice -= 26;
      }
      break;
    }
  }

  console.log(days);
  console.log(totalSpice);
}
calcSpice(50);
