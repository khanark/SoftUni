function account(arr) {
  let installedGames = arr.shift().split(' ');

  for (let i = 0; i < arr.length; i++) {
    let [currentGame, command] = arr[i].split(' ');

    switch (command) {
      case 'Install':
        if (!installedGames.includes(currentGame)) {
          installedGames.push(currentGame);
        }
        break;
      case 'Uninstall':
        if (installedGames.includes(currentGame)) {
          installedGames.splice(installedGames.indexOf(currentGame), 1);
        }
        break;
      case 'Update':
        if (installedGames.includes(currentGame)) {
          installedGames.splice(installedGames.indexOf(currentGame), 1);
          installedGames.push(currentGame);
        }
        break;
      case 'Expansion':
        let [installedGame, expansionGame] = currentGame.split('-');
        if (installedGames.includes(installedGame)) {
          installedGames.splice(
            installedGames.indexOf(installedGame) + 1,
            0,
            `${installedGame}:${expansionGame}`
          );
        }
    }

    if (command === 'Play!') break;
  }
  console.log(installedGames.join(' '));
}
account([
  'CS WoW Diablo',
  'Uninstall XCOM',
  'Update PeshoGame',
  'Update WoW',
  'Expansion Civ-V',
  'Play!',
]);
