function hotelRoom(input) {
  let month = String(input[0]);
  let nights = Number(input[1]);
  let studio, apartment;

  if (month == "May" || month == "October") {
    studio = 50 * nights;
    apartment = 65 * nights;

    if (nights > 14) {
      studio *= 0.7;
      apartment *= 0.9;
    } else if (nights < 14 && nights > 7) {
      studio *= 0.95;
    }
  } else if (month == "June" || month == "September") {
    studio = 75.2 * nights;
    apartment = 68.7 * nights;

    if (nights > 14) {
      studio *= 0.8;
      apartment *= 0.9;
    }
  } else if (month == "July" || month == "August") {
    studio = 76 * nights;
    apartment = 77 * nights;

    if (nights > 14) {
      apartment *= 0.9;
    }
  }
  console.log(
    `Apartment: ${apartment.toFixed(2)} lv.\nStudio: ${studio.toFixed(2)} lv.`
  );
}
