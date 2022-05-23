function report(input) {
  let goalProfit = Number(input[0]);
  let index = 1;
  let command = input[index];
  let paidWithCard = 0;
  let paidInCash = 0;
  let paidInCashSum = 0;
  let paidWithCardSum = 0;

  while (command !== 'End') {
    let sells = Number(command);
    if (index % 2 === 1 && sells <= 100) {
      paidInCash++;
      paidInCashSum += sells;
      console.log(`Product sold!`);
    } else if (index % 2 === 0 && sells >= 10) {
      paidWithCard++;
      paidWithCardSum += sells;
      console.log(`Product sold!`);
    } else {
      console.log(`Error in transaction!`);
    }
    if (paidInCashSum + paidWithCardSum >= goalProfit) {
      let averageCs = paidInCashSum / paidInCash;
      let averageCc = paidWithCardSum / paidWithCard;
      console.log(`Average CS: ${averageCs.toFixed(2)}`);
      console.log(`Average CC: ${averageCc.toFixed(2)}`);
      break;
    }
    index++;
    command = input[index];
  }
  if (command === 'End')
    console.log(`Failed to collect required money for charity.`);
}
report(['500', '120', '8', '63', '256', '78', '317']);
