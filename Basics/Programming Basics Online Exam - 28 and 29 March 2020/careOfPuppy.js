function careOfPuppey(input) {
  let numbersArray = [];
  let stringsArray = [];
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === 'number') {
      numbersArray.push(input[i]);
    } else {
      stringsArray.push(input[i]);
    }
  }
  console.log(numbersArray);
  console.log(stringsArray);
}

//   while (typeof eatenFood !== 'NaN') {
//     eatenFoodSum += eatenFood;
//     eatenFood = Number(input.shift());
//   }
//   let diff = Math.abs(eatenFoodSum - boughtFood);
//   if (eatenFoodSum <= boughtFood) {
//     console.log(`Food is enough! Leftovers: ${diff} grams.`);
//   } else {
//     console.log(`Food is not enough. You need ${diff} grams more.`);
//   }
// }
careOfPuppey(['4', 130, '345', '400', '180', 230, '120', 'Adopted']);
