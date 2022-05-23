function calcBitcoin(shift) {
  let money = 0;
  let bitcoins = 0;
  let day = 0;
  let printLine = '';
  let isBought = false;

  for (let i = 0; i < shift.length; i++) {
    let currentShift = shift[i];

    if ((i + 1) % 3 === 0) {
      currentShift *= 0.7;
    }

    money += currentShift * 67.51;
    if (money >= 11949.16) {
      day = i + 1
      printLine += day
    }

    while (money >= 11949.16) {
      bitcoins++;
      money -= 11949.16;
      isBought = true;
    }
  }

  console.log(`Bought bitcoins: ${bitcoins}`);
  if (isBought) {
    console.log(`Day of the first purchased bitcoin: ${printLine.charAt(0)}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}
calcBitcoin([100, 200, 300]);
