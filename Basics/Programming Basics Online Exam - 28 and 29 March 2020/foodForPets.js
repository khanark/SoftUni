function foodForPets(input) {
  const days = Number(input.shift());
  const totalAmountFood = Number(input.shift());
  let totalEatenFood = 0;
  let eatenFoodForTheDay = 0;
  let dogFood = 0;
  let catFood = 0;
  let biscuits = 0;
  let eatenByDog = Number(input.shift());
  let eatenByCat = Number(input.shift());

  for (let i = 1; i <= days; i++) {
    dogFood += eatenByDog;
    catFood += eatenByCat;
    eatenFoodForTheDay = eatenByDog + eatenByCat;

    if (i % 3 === 0) {
      biscuits += eatenFoodForTheDay * 0.1;
    }
    totalEatenFood += eatenFoodForTheDay;
    eatenByDog = Number(input.shift());
    eatenByCat = Number(input.shift());
  }
  console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
  let percentageEatenFood = (totalEatenFood / totalAmountFood) * 100;
  console.log(`${percentageEatenFood.toFixed(2)}% of the food has been eaten.`);
  let percentageEatenByDog = (dogFood / totalEatenFood) * 100;
  console.log(`${percentageEatenByDog.toFixed(2)}% eaten from the dog.`);
  let percentageEatenByCat = (catFood / totalEatenFood) * 100;
  console.log(`${percentageEatenByCat.toFixed(2)}% eaten from the cat.`);
}
foodForPets(['3', '500', '100', '30', '110', '25', '120', '35']);

function calcAge(birthYear) {
  return 2022 - birthYear;
}

const myAge = function (birthYear) {
  return 2022 - birthYear;
};
