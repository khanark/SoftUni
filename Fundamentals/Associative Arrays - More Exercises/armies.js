function storeArmyInfo(arr) {
	// create collection
	let armies = {};

	// parse the input
	for (const line of arr) {
		if (line.includes('arrives')) {
			const leader = line.substr(0, line.indexOf('arrives') - 1);
			armies[leader] = { armyCount: 0 };
		} else if (line.includes(' + ')) {
			// "{army name} + {army count}" – if the army exists somewhere add the count
			const [armyName, armyCount] = line.split(' + ');

			for (const leader of Object.keys(armies)) {
				if (armies[leader].hasOwnProperty(armyName)) {
					armies[leader].armyCount += Number(armyCount);
					armies[leader][armyName] += Number(armyCount);
				}
			}
		} else if (line.includes('defeated')) {
			const leader = line.substr(0, line.indexOf('defeated') - 1);

			if (armies.hasOwnProperty(leader)) {
				delete armies[leader];
			}
		} else {
			const [leader, token] = line.split(': ');
			const [armyName, armyCount] = token.split(', ');

			if (armies.hasOwnProperty(leader)) {
				armies[leader][armyName] = Number(armyCount);
				armies[leader].armyCount += Number(armyCount);
			}
		}
	}
	// sorting the armies
	const sortedByTotalArmyCount = Object.entries(armies).sort((a, b) => {
		const totalArmyFirst = Object.values(a[1]).reduce((a, b) => a + b);
		const totalArmySecond = Object.values(b[1]).reduce((a, b) => a + b);
		return totalArmySecond - totalArmyFirst;
	});

	// printing the output
	for (const [leader, armyInfo] of sortedByTotalArmyCount) {
		console.log(`${leader}: ${armies[leader].armyCount}`);
		const army = Object.entries(armyInfo);
		army.shift();
		const armySortedByCount = army.sort((a, b) => b[1] - a[1]);

		for (const [army, count] of armySortedByCount) {
			console.log(`>>> ${army} - ${count}`);
		}
	}
}

storeArmyInfo([
	'Rick Burr arrives',
	'Fergus: Wexamp, 30245',
	'Rick Burr: Juard, 50000',
	'Findlay arrives',
	'Findlay: Britox, 34540',
	'Wexamp + 6000',
	'Juard + 1350',
	'Britox + 4500',
	'Porter arrives',
	'Porter: Legion, 55000',
	'Legion + 302',
	'Rick Burr defeated',
	'Porter: Retix, 3205',
]);