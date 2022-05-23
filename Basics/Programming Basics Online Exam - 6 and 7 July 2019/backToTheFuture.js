function future(input) {
  let moneyToSpend = Number(input[0]);
  let yearUntilDeath = Number(input[1]);
  let isEnough = true;
  let spentMoney = 0;

  for (let i = 1800; i <= yearUntilDeath; i++) {
    if (i % 2 === 0) {
      spentMoney += 12000;
    } else {
      let years = i - 1800 + 18;
      spentMoney += 12000 + 50 * years;
    }
    if (spentMoney > moneyToSpend) {
      isEnough = false;
    }
  }
  let diff = Math.abs(spentMoney - moneyToSpend);
  if (!isEnough) {
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
  } else {
    console.log(
      `Yes! He will live a carefree life and will have ${(
        moneyToSpend - spentMoney
      ).toFixed(2)} dollars left.`
    );
  }
}
future(['100000.15', '1808']);
