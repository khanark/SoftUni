function journey(input) {
  let budged = Number(input[0]);
  let season = input[1];
  let destination;
  let price;
  let booked;

  if (budged <= 100) {
    destination = "Bulgaria";
    switch (season) {
      case "summer":
        price = budged * 0.3;
        booked = "Camp";
        break;
      case "winter":
        price = budged * 0.7;
        booked = "Hotel";
        break;
    }
  } else if (budged <= 1000) {
    destination = "Balkans";
    switch (season) {
      case "summer":
        price = budged * 0.4;
        booked = "Camp";
        break;
      case "winter":
        price = budged * 0.8;
        booked = "Hotel";
        break;
    }
  } else {
    destination = "Europe";
    switch (season) {
      case "summer":
        price = budged * 0.9;
        booked = "Hotel";
        break;
      case "winter":
        price = budged * 0.9;
        booked = "Hotel";
        break;
    }
  }
  console.log(`Somewhere in ${destination}\n${booked} - ${price.toFixed(2)}`);
}

