function bakingBread(input) {
  let easterBreadCount = Number(input[0]);
  let index = 1;
  let sugarSpent = Number(input[index]);
  index++;
  let flourSpent = Number(input[index]);
  index++;
  let sugar = 950;
  let flour = 750;
  let neededSugar = neededFlour = sugarPacket = flourPacket = maxSpentSugar = maxSpentFlour = 0;

  for (let i = 1; i <= easterBreadCount; i++) {
    neededSugar += sugarSpent;
    neededFlour += flourSpent;
    if (sugarSpent > maxSpentSugar) maxSpentSugar = sugarSpent;
    sugarSpent = Number(input[index]);
    index++;
    if (flourSpent > maxSpentFlour) maxSpentFlour = flourSpent;
    flourSpent = Number(input[index]);
    index++;
  }
  sugarPacket = neededSugar / sugar;
  flourPacket = neededFlour / flour;
  console.log(
    `Sugar: ${Math.ceil(sugarPacket)}\nFlour: ${Math.ceil(flourPacket)}`
  );
  console.log(
    `Max used flour is ${maxSpentFlour} grams, max used sugar is ${maxSpentSugar} grams.`
  );
}
bakingBread(['2', '500', '350', '560', '430', '600', '345', '578', '543']);
