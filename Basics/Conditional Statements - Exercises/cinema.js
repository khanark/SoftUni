function cinema(input) {
  let projection = String(input[0]);
  let line = Number(input[1]);
  let column = Number(input[2]);

  if (projection === "Premiere") {
    projection = 12.0;
  } else if (projection === "Normal") {
    projection = 7.5;
  } else if (projection === "Discount") {
    projection = 5;
  }
  let total = projection * line * column;
  console.log(`${total.toFixed(2)} leva`);
}
