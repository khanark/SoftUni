function storeArmyInfo(arr) {
	// create collection with pattern "{leader}: {army name}, {army count}" , leader can sometimes arrive solo
	let army = {};
	// parse the input
	for (const command of arr) {
		// if the following input is received do the following
		if (command.includes('arrives')) {
			const token = command.split(' ');
			const leader = token.splice(0, token.indexOf('arrives')).join(' ');
			army[leader] = new Map();
			// "{army name} + {army count}" – if the army exists somewhere add the count
		} else if (command.includes(' + ')) {
			const [armyName, armyCount] = command.split(' + ');
			const leaders = Object.keys(army);
			for (const currentLeader of leaders) {
				if (army[currentLeader].has(armyName)) {
					let oldCount = army[currentLeader].get(armyName);
					let newCount = (oldCount += Number(armyCount));
					army[currentLeader].set(armyName, newCount);
				}
			}
			// "{leader} defeated" – delete the leader and his army (if he exists)
		} else if (command.includes('defeated')) {
			const token = command.split(' ');
			const leader = token.splice(0, token.indexOf('defeated')).join(' ');
			if (army.hasOwnProperty(leader)) {
				delete army[leader];
			}
		} else {
			const [leader, token] = command.split(': ');
			const [armyName, armyCount] = token.split(', ');
			if (army.hasOwnProperty(leader)) {
				army[leader].set(armyName, Number(armyCount));
			}
		}
	}
	// When finished reading the input sort the leaders by total army count in descending. Then each army should be sorted by count in descending.
	const result = Object.entries(army).sort(function (a, b) {
		let leaderOneTotalArmyCount = 0;
		let leaderTwoTotalArmyCount = 0;
		if (Array.from(a[1].values()).length == 0) {
			leaderOneTotalArmyCount = 0;
		} else if (Array.from(b[1].values()).length == 0) {
			leaderTwoTotalArmyCount = 0;
		} else {
			leaderOneTotalArmyCount = Array.from(a[1].values()).reduce(
				(a, b) => a + b
			);
			leaderTwoTotalArmyCount = Array.from(b[1].values()).reduce(
				(a, b) => a + b
			);
		}
		return leaderTwoTotalArmyCount - leaderOneTotalArmyCount;
	});
	// print the output
	for (const array of result) {
		const [leader, armyInfo] = array;
		let totalArmyCount = 0;
		if (Array.from(armyInfo.values()) == 0) {
			totalArmyCount = 0;
		} else {
			totalArmyCount = Array.from(armyInfo.values()).reduce((a, b) => a + b);
		}
		// const totalArmyCount = Array.from(armyInfo.values()).reduce(
		// 	(a, b) => a + b
		// );
		console.log(`${leader}: ${totalArmyCount}`);
		const sorted = Array.from(armyInfo.entries()).sort((a, b) => b[1] - a[1]);
		for (const [army, count] of sorted) {
			console.log(`>>> ${army} - ${count}`);
		}
	}
	// TODO: NEEDS FIX
}
storeArmyInfo([
	'K arrives',
	'K: W, 30245',
	'R: B, 50000',
	'F arrives',
	'W + 6000',
	'W + 30245',
	'R: B, 50000',
	'A arrives',
	'A: B, 34540',
	'B + 340',
]);
console.log('----');
storeArmyInfo([
	'Rick Burr arrives',
	'Findlay arrives',
	'Rick Burr: Juard, 1500',
	'Wexamp arrives',
	'Findlay: Wexamp, 34540',
	'Wexamp + 340',
	'Wexamp: Britox, 1155',
	'Wexamp: Juard, 43423',
]);
