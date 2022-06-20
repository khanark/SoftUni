function manageChest(input) {
  // create collection
	const treasureChest = input.shift().split('|');

  // loop the input
	while (input[0] !== 'Yohoho!') {
		const [command, ...rest] = input.shift().split(' ');

    // implement logic behind different commands
		if (command == 'Loot') {
			for (const item of rest) {
				if (!treasureChest.includes(item)) {
					treasureChest.unshift(item);
				}
			}
		} else if (command == 'Drop') {
      if (rest[0] >= 0 && rest[0] < treasureChest.length) {
			const removedItem = treasureChest.splice(rest[0], 1).join('');
			treasureChest.push(removedItem);
      }
		} else {
			const stolenItems = treasureChest.splice(-rest[0]);
			console.log(stolenItems.join(', '));
		}
	}

  // print the output
	if (treasureChest.length) {

    // create function to calculate the average
		const calcAverage = () => {
			let sum = 0;
			for (const el of treasureChest) {
				sum += el.length;
			}
			return sum / treasureChest.length;
		};
		console.log(
			`Average treasure gain: ${calcAverage().toFixed(2)} pirate credits.`
		);
	} else {
		console.log('Failed treasure hunt.');
	}
}
manageChest([
	'Gold|Silver|Bronze|Medallion|Cup',
	'Loot Wood Gold Coins',
	'Loot Silver Pistol',
	'Drop 3',
	'Steal 3',
	'Yohoho!',
]);
