function dinero(input) {
  let oneBill = Number(input[0]);
  let twoBill = Number(input[1]);
  let fiveBill = Number(input[2]);
  let result = Number(input[3]);

  for (let i = 0; i <= oneBill; i++) {
    for (let j = 0; j <= twoBill; j++) {
      for (let k = 0; k <= fiveBill; k++) {
        if (i * 1 + j * 2 + k * 5 === result) {
          console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${result} lv.`);
        }
      }
    }
  }
}
dinero(['5', '3', '1', '7']);
