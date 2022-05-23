function fishingBoat(input) {
  let budged = Number(input[0]);
  let season = input[1];
  let fisherman = Number(input[2]);
  let price;
  switch (season) {
    case "Spring":
      price = 3000;
      if (fisherman <= 6) {
        price *= 0.9;
        if (fisherman % 2 === 0) {
          price *= 0.95;
        }
      } else if (fisherman >= 7 && fisherman <= 11) {
        price *= 0.85;
        if (fisherman % 2 === 0) {
          price *= 0.95;
        }
      } else {
        price *= 0.75;
        if (fisherman % 2 === 0) {
          price *= 0.95;
        }
      }
      break;
    case "Summer":
      price = 4200;
      if (fisherman <= 6) {
        price *= 0.9;
        if (fisherman % 2 === 0) {
          price *= 0.95;
        }
      } else if (fisherman >= 7 && fisherman <= 11) {
        price *= 0.85;
        if (fisherman % 2 === 0) {
          price *= 0.95;
        }
      } else {
        price *= 0.75;
        if (fisherman % 2 === 0) {
          price *= 0.95;
        }
      }
      break;
    case "Autumn":
      price = 4200;
      if (fisherman <= 6) {
        price *= 0.9;
      } else if (fisherman >= 7 && fisherman <= 11) {
        price *= 0.85;
      } else {
        price *= 0.75;
      }
      break;
    case "Winter":
      price = 2600;
      if (fisherman <= 6) {
        price *= 0.9;
        if (fisherman % 2 === 0) {
          price *= 0.95;
        }
      } else if (fisherman >= 7 && fisherman <= 11) {
        price *= 0.85;
        if (fisherman % 2 === 0) {
          price *= 0.95;
        }
      } else {
        price *= 0.75;
        if (fisherman % 2 === 0) {
          price *= 0.95;
        }
      }
      break;
  }
  let diff = Math.abs(price - budged);
  if (budged >= price) {
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
  }
}
