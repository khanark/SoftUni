function roundNumber(number, r) {
  if (r > 15) {
    r = 15
  }
  console.log(parseFloat(number.toFixed(r)));
}
roundNumber(10.5, 3);
