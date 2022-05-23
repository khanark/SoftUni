function godzilla(input) {
  let movieBudged = Number(input[0]);
  let statists = Number(input[1]);
  let clothesForEach = Number(input[2]);
  let decor = movieBudged * 0.1;
  let clothesTotal = statists * clothesForEach;
  if (statists > 150) {
    clothesTotal *= 0.9;
  }
  let totalBudgedForTheMovie = clothesTotal + decor;
  let left = Math.abs(movieBudged - totalBudgedForTheMovie);
  if (totalBudgedForTheMovie > movieBudged) {
    console.log(`Not enough money!\nWingard needs ${left.toFixed(2)} leva more.`)
  } else {
    console.log(`Action!\nWingard starts filming with ${left.toFixed(2)} leva left.`)
  }
}
godzilla(["15437.62",
"186",
"57.99"])

