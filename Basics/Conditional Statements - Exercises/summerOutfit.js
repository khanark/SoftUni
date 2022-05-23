function summerOutfit(input) {
  let degrees = Number(input[0]);
  let dayTime = String(input[1]);
  let outFit;
  let shoes;

  if (degrees >= 10 && degrees <= 18) {
    switch (dayTime) {
      case "Morning":
        outFit = "Sweatshirt";
        shoes = "Sneakers";
        break;
      case "Afternoon":
        outFit = "Shirt";
        shoes = "Moccasins";
        break;
      case "Evening":
        outFit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  } else if (degrees > 18 && degrees <= 24) {
    switch (dayTime) {
      case "Morning":
        outFit = "Shirt";
        shoes = "Moccasins";
        break;
      case "Afternoon":
        outFit = "T-Shirt";
        shoes = "Sandals";
        break;
      case "Evening":
        outFit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  } else if (degrees >= 25) {
    switch (dayTime) {
      case "Morning":
        outFit = "T-Shirt";
        shoes = "Sandals";
        break;
      case "Afternoon":
        outFit = "Swim Suit";
        shoes = "Barefoot";
        break;
      case "Evening":
        outFit = "Shirt";
        shoes = "Moccasins";
        break;
    }
  }
  console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);
}
