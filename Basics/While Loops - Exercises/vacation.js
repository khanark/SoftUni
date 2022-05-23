function vacation(input) {
  let moneyNeededForVacation = Number(input[0]);
  let currentMoney = Number(input[1]);
  let index = 2;
  let action = input[index];
  let moneySaveOrSpend = Number(input[index]);
  let totalDays = 0;
  let spendDays = 0;

  while (currentMoney < moneyNeededForVacation) {
    totalDays++;
    index++;
    moneySaveOrSpend = Number(input[index]);
    if (action === "spend") {
      currentMoney -= moneySaveOrSpend;
      spendDays++;
      if (spendDays === 5) {
        console.log(`You can't save the money.\n${totalDays}`);
        break;
      }
    }
    if (action === "save") {
      spendDays = 0;
      currentMoney += moneySaveOrSpend;
      if (currentMoney >= moneyNeededForVacation) {
        console.log(`You saved the money for ${totalDays} days.`);
        break;
      }
    }
    index++;
    action = input[index];
    if (currentMoney < 0) {
      currentMoney = 0;
    }
  }
}
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
