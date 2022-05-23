function nestava(input) {
  let name = input[0];
  let klas = 0;
  let sborOcenki = 0;
  let excluded = 0;
  let index = 0;
  let isExcluded = false;

  while (klas !== 12) {
    index++;
    let ocenka = Number(input[index]);
    if (ocenka < 4.0) {
      excluded += 1;
      if (excluded > 1) {
        console.log(`${name} has been excluded at ${klas} grade`);
        isExcluded = true;
        break;
      }
      sborOcenki += ocenka;
      klas++;
      continue;
    }
    sborOcenki += ocenka;
    klas++;
  }
  let average = sborOcenki / 12;

  if (!isExcluded) {
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
  }
}
nestava(['Mimi', '5', '6', '4', '2', '5', '6', '6', '6', '6', '6', '5', '6']);
console.log(5 + 6 + 4 + 2 + 5 + 6 + 6 + 6 + 6 + 6 + 5 + 6);
console.log(63 / 12);
