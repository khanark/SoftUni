function coins(input) {
  let change = (Number(input[0]) * 100).toFixed(0);
  let coins = 0;
  let currentChange = 0;
  while (currentChange !== change) {
    let diff = (change - currentChange).toFixed(0);
    if (diff >= 200) {
      currentChange += 200;
      coins++;
      continue;
    } else if (diff >= 100) {
      currentChange += 100;
      coins++;
      continue;
    } else if (diff >= 50) {
      currentChange += 50;
      coins++;
      continue;
    } else if (diff >= 20) {
      currentChange += 20;
      coins++;
      continue;
    } else if (diff >= 10) {
      currentChange += 10;
      coins++;
      continue;
    } else if (diff >= 5) {
      currentChange += 5;
      coins++;
      continue;
    } else if (diff >= 2) {
      currentChange += 2;
      coins++;
      continue;
    } else if (diff >= 1) {
      currentChange += 1;
      coins++;
      continue;
    }
    if (currentChange = change) {
      break;
    }
  }
  console.log(coins);
}
coins(["1.23"]);
