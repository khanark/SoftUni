function gameShop(input) {
  let games = Number(input[0]);
  let index = 1;
  let gamesName = input[index];
  let hearthstone = 0;
  let fornite = 0;
  let overwatch = 0;
  let others = 0;

  const calcPercent = gameName => (gameName / games) * 100;

  for (let i = 1; i <= games; i++) {
    switch (gamesName) {
      case 'Hearthstone':
        hearthstone++;
        break;
      case 'Fornite':
        fornite++;
        break;
      case 'Overwatch':
        overwatch++;
        break;
      default:
        others++;
        break;
    }
    gamesName = input[i];
  }
  
  console.log(`Hearthstone - ${calcPercent(hearthstone).toFixed(2)}%`);
  console.log(`Fornite - ${calcPercent(fornite).toFixed(2)}%`);
  console.log(`Overwatch - ${calcPercent(overwatch).toFixed(2)}%`);
  console.log(`Others - ${calcPercent(others).toFixed(2)}%`);
}
gameShop(['3', 'Hearthstone', 'Diablo 2', 'Star Craft 2']);
