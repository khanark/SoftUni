function logistics(input) {
  let cargos = Number(input[0]);
  let allTonnage = 0;
  let moneySum = 0;
  let bus = 0;
  let truck = 0;
  let train = 0;

  for (let i = 1; i <= cargos; i++) {
    let tonnage = Number(input[i]);
    allTonnage += tonnage;
    if (tonnage <= 3) {
      bus += tonnage;
      moneySum += 200;
    } else if (tonnage >= 4 && tonnage <= 11) {
      truck += tonnage;
      moneySum += 175;
    } else {
      train += tonnage;
      moneySum += 120;
    }
  }
  let average$$Tonnage = (bus * 200 + truck * 175 + train * 120) / allTonnage;
  const averageMtv = vihicle => (vihicle / allTonnage) * 100;
  console.log(average$$Tonnage.toFixed(2));
  console.log(`${averageMtv(bus).toFixed(2)}%`);
  console.log(`${averageMtv(truck).toFixed(2)}%`);
  console.log(`${averageMtv(train).toFixed(2)}%`);
}
logistics(['4', '1', '5', '16', '3']);
