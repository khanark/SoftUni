function familyTrip(input) {
  let budged = Number(input[0]);
  let nightsCount = Number(input[1]);
  let priceForNight = Number(input[2]);
  let aditionalCostPercent = Number(input[3]);
  let totalSumNights = 0;
  nightsCount > 7
    ? (totalSumNights = priceForNight * 0.95 * nightsCount)
    : (totalSumNights = priceForNight * nightsCount);
  let total = totalSumNights + budged * (aditionalCostPercent / 100);
  let diff = Math.abs(total - budged);
  if (total <= budged) {
    console.log(
      `Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`
    );
  } else {
    console.log(`${diff.toFixed(2)} leva needed.`);
  }
}
familyTrip(['800.50', '8', '100', '2']);
