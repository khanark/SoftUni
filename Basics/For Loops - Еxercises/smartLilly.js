function smartLilly(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);
  let money = 0;
  let sum = 0;
  let toyCount = 0;
  let bonusMoney = 0;
  for (let i = 1; i <= age; i++) {
    if (i % 2 == 1) {
      toyCount++;
    } else {
      money += (10 * i) / 2;
      money--;
    }
    sum = money + toyPrice * toyCount;
  }
  let diff = Math.abs(sum - washingMachinePrice);
  if (sum >= washingMachinePrice) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}

