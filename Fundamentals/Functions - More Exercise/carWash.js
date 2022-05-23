function carWash(array) {
  let percentage = 0;

  for (let i = 0; i < array.length; i++) {
    let detergentType = array[i];
    washWith(detergentType);
  }
  function washWith(detergent) {
    switch (detergent) {
      case 'soap':
        percentage += 10;
        break;
      case 'water':
        percentage *= 1.2;
        break;
      case 'vacuum cleaner':
        percentage *= 1.25;
        break;
      case 'mud':
        percentage *= 0.9;
        break;
    }
    return percentage;
  }

  console.log(`The car is ${percentage.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
