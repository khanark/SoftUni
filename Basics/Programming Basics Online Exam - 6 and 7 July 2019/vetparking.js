function taxProgram(input) {
  let days = Number(input[0]);
  let hours = Number(input[1]);
  let dayTax = 0;
  let total = 0;

  for (let i = 1; i <= days; i++) {
    for (let j = 1; j <= hours; j++) {
      if (i % 2 === 0 && j % 2 === 1) {
        dayTax += 2.5;
      } else if (i % 2 === 1 && j % 2 === 0) {
        dayTax += 1.25;
      } else {
        dayTax += 1;
      }
    }
    total += dayTax;
    console.log(`Day: ${i} - ${dayTax.toFixed(2)} leva`);
    dayTax = 0;
  }
  console.log(`Total: ${total.toFixed(2)} leva`);
}
taxProgram(['2', '5']);
