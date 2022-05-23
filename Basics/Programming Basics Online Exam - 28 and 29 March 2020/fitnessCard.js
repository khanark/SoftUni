function fitnessCard(input) {
  let budged = Number(input[0]);
  let sex = input[1];
  let age = Number(input[2]);
  let sportType = input[3];
  let price = 0;

  switch (sportType) {
    case 'Gym':
      if (sex === "m") {
        price = 42;
      } else {
        price = 35;
      }
      if (age <= 19) {
        price *= 0.8;
      }
      break;
    case 'Boxing':
      if (sex === "m") {
        price = 41;
      } else {
        price = 37;
      }
      if (age <= 19) {
        price *= 0.8;
      }
      break;
    case 'Yoga':
      if (sex === "m") {
        price = 45;
      } else {
        price = 42;
      }
      if (age <= 19) {
        price *= 0.8;
      }
      break;
    case 'Zumba':
      if (sex === "m") {
        price = 34;
      } else {
        price = 31;
      }
      if (age <= 19) {
        price *= 0.8;
      }
      break;
    case 'Dances':
      if (sex === "m") {
        price = 51;
      } else {
        price = 53;
      }
      if (age <= 19) {
        price *= 0.8;
      }
      break;
    case 'Pilates':
      if (sex === "m") {
        price = 39;
      } else {
        price = 37;
      }
      if (age <= 19) {
        price *= 0.8;
      }
      break;
  }
  let diff = Math.abs(price - budged);
  if (price <= budged) {
    console.log(`You purchased a 1 month pass for ${sportType}.`);
  } else {
    console.log(`You don't have enough money! You need $${diff.toFixed(2)} more.`);
  }
}
fitnessCard(["10",
"m",
"50",
"Pilates"])

