function cinemaVoucher(input) {
  let vaucherValue = Number(input[0]);
  let index = 1;
  let item = input[index];
  let boughtTicket = 0;
  let boughtProduct = 0;

  while (item !== 'End') {
    let nameProduct = item.length;
    let firstDigit = 0;
    let secondDigit = 0;
    let currentSum = 0;

    if (nameProduct > 8) {
      firstDigit = item.charCodeAt(0);
      secondDigit = item.charCodeAt(1);
      currentSum = firstDigit + secondDigit;
      if (currentSum <= vaucherValue) {
        boughtTicket++;
        vaucherValue -= currentSum;
      } else {
        break
      }
    } else if (nameProduct <= 8) {
      firstDigit = item.charCodeAt(0);
      currentSum = firstDigit;
      if (currentSum <= vaucherValue) {
        boughtProduct++;
        vaucherValue -= currentSum;
      } else {
        break
      }
    }
    index++;
    item = input[index];
  }
  console.log(boughtTicket);
  console.log(boughtProduct);
}
cinemaVoucher([
  '1500',
  'Avengers: Endgame',
  'Bohemian Rhapsody',
  'Deadpool 2',
  'End',
]);
