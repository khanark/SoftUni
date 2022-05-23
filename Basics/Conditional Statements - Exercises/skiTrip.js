function skiTrip(input) {
  let days = Number(input[0]) - 1;
  let roomType = String(input[1]);
  let evaluation = String(input[2]);
  let price;
  switch (roomType) {
    case "room for one person":
      price = 18 * days;
      if (evaluation === "positive") {
        price = price * 1.25;
      } else if (evaluation === "negative") {
        price = price * 0.9;
      }
      break;
    case "apartment":
      price = 25 * days;
      if (days > 10 && days < 15) {
        price = 25 * days * 0.65;
        if (evaluation === "positive") {
          price = price * 1.25;
        } else if (evaluation === "negative") {
          price = price * 0.9;
        }
      } else if (days < 10) {
        price = 25 * days * 0.7;
        if (evaluation === "positive") {
          price = price * 1.25;
        } else if (evaluation === "negative") {
          price = price * 0.9;
        }
      } else {
        price = 25 * days * 0.5;
        if (evaluation === "positive") {
          price = price * 1.25;
        } else if (evaluation === "negative") {
          price = price * 0.9;
        }
      }
      break;
    case "president apartment":
      price = 35 * days;
      if (days > 10 && days < 15) {
        price = 35 * days * 0.85;
        if (evaluation === "positive") {
          price = price * 1.25;
        } else if (evaluation === "negative") {
          price = price * 0.9;
          if (evaluation === "positive") {
            price = price * 1.25;
          } else if (evaluation === "negative") {
            price = price * 0.9;
          }
        }
      } else if (days < 10) {
        price = 35 * days * 0.9;
        if (evaluation === "positive") {
          price = price * 1.25;
        } else if (evaluation === "negative") {
          price = price * 0.9;
        }
      } else {
        price = 35 * days * 0.8;
        if (evaluation === "positive") {
          price = price * 1.25;
        } else if (evaluation === "negative") {
          price = price * 0.9;
        }
      }
      break;
  }
  console.log(price.toFixed(2));
}

