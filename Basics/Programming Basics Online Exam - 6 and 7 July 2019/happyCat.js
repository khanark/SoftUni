function happyCat(input) {
  let days = Number(input[0]);
  let hours = Number(input[1]);
  let total = 0;

  for (let i = 1; i <= days; i++) {
    let tax = 0;
    for (let j = 1; j <= hours; j++) {
      if (i % 2 === 0 && j % 2 === 1) {
        tax += 2.5;
      } else if ((i % 2 === 1) & (j % 2 === 0)) {
        tax += 1.25;
      } else {
        tax += 1;
      }
    }
    console.log(`Day: ${i} - ${tax.toFixed(2)} leva`);
    total += tax;
  }
  console.log(`Total: ${total.toFixed(2)} leva`);
}
happyCat(['2', '5']);
