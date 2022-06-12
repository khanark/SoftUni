function keepTrack(arr) {
  // creating initial values
	let initialEnergy = Number(arr.shift());
	let battlesWon = 0;
	let notEnoughEnergy = false;

  // loop the enemy's energy
	while (arr[0] !== 'End of battle') {
    const currentEnergy = Number(arr.shift());

		if (initialEnergy >= currentEnergy) {
				initialEnergy -= currentEnergy;
				battlesWon++;
			if (battlesWon % 3 == 0 && battlesWon != 0) {
				initialEnergy += battlesWon;
			}
		} else {
      notEnoughEnergy = true;
      break
    }
	}

  // print the output
	if (!notEnoughEnergy) {
		console.log(`Won battles: ${battlesWon}. Energy left: ${initialEnergy}`);
	} else {
		console.log(
			`Not enough energy! Game ends with ${battlesWon} won battles and ${initialEnergy} energy`
		);
	}
}
keepTrack((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
);
