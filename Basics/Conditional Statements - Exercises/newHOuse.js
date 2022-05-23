function newHouse(input) {
  let flower = input[0];
  let flowerCount = Number(input[1]);
  let budged = Number(input[2]);
  let price;

  switch (flower) {
    case "Roses":
      price = 5 * flowerCount;
      if (flowerCount > 80) {
        price = price * 0.9;
      }
      break;
    case "Dahlias":
      price = 3.8 * flowerCount;
      if (flowerCount > 90) {
        price = price * 0.85;
      }
      break;
    case "Tulips":
      price = 2.8 * flowerCount;
      if (flowerCount > 80) {
        price = price * 0.85;
      }
      break;
    case "Narcissus":
      price = 3 * flowerCount;
      if (flowerCount < 120) {
        price = price * 1.15;
      }
      break;
    case "Gladiolus":
      price = 2.5 * flowerCount;
      if (flowerCount < 80) {
        price = price * 1.2;
      }
      break;
  }
  let diff = Math.abs(price - budged);
  if (budged >= price) {
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flower} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}
