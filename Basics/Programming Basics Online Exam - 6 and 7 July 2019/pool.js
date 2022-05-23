function pool(input) {
  let peopleCount = Number(input[0]);
  let entryFee = Number(input[1]) * peopleCount;
  const calcPercent = percent => peopleCount * percent;
  let priceForSleep = Number(input[2]) * Math.ceil(calcPercent(0.75));
  let priceForAmbrella = Number(input[3]) * Math.ceil(calcPercent(0.5));
  let total = entryFee + priceForSleep + priceForAmbrella;
  console.log(`${total.toFixed(2)} lv.`);
}
pool(['21', '5.50', '4.40', '6.20']);
