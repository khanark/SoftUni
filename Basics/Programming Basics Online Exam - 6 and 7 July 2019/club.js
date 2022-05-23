function club(input) {
  let metaProfit = Number(input[0]);
  let index = 1;
  let coctailName = input[index];
  index++;
  let coctailCount = Number(input[index]);
  let bill = 0;
  let total = 0;
  let flag = false;

  while (coctailName !== 'Party!') {
    let coctailPrice = coctailName.length;
    bill = coctailCount * coctailPrice;
    if (bill % 2 === 1) {
      bill *= 0.75;
    }
    total += bill;
    index++;
    coctailName = input[index];
    index++;
    coctailCount = Number(input[index]);
    if (total >= metaProfit) {
      flag = true;
      break;
    }
  }

  let diff = metaProfit - total;

  if (coctailName === 'Party!') {
    console.log(`We need ${diff.toFixed(2)} leva more.`);
  } else if (flag) {
    console.log(`Target acquired.`);
  }
  console.log(`Club income - ${total.toFixed(2)} leva.`);
}
club(['100', 'Sidecar', '7', 'Mojito', '5', 'White Russian', '10']);
