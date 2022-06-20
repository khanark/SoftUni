function trackBattle(arr) {
	let statusPirateShip = arr.shift().split('>').map(Number);
	const statusWarShip = arr.shift().split('>').map(Number);
	const maxHealthSection = Number(arr.shift());

	while (arr[0] !== 'Retire') {
		let [command, ...rest] = arr.shift().split(' ');
		rest = rest.map(Number);

		if (command == 'Fire') {
			const index = rest[0];
			const dmg = rest[1];

			if (index >= 0 && index < statusWarShip.length) {
				const health = (statusWarShip[index] -= dmg);
				if (health <= 0) {
					console.log('You won! The enemy ship has sunken.');
					return;
				}
			}
		} else if (command == 'Defend') {
			const startIndex = rest[0];
			const endIndex = rest[1];
			const dmg = rest[2];
			const rangeIsValid =
				startIndex >= 0 &&
				startIndex < statusPirateShip.length &&
				endIndex >= 0 &&
				endIndex < statusPirateShip.length;

			if (rangeIsValid) {
        for (let i= 0; i < statusPirateShip.length; i++) {
          if (i >= startIndex && i <= endIndex) {
            statusPirateShip[i] -= dmg
          }
        }
				if (statusPirateShip.some(n => n <= 0)) {
					console.log('You lost! The pirate ship has sunken.');
					return;
				}
			}
		} else if (command == 'Repair') {
			if (rest[0] >= 0 && rest[0] < statusPirateShip.length) {
				statusPirateShip[rest[0]] += rest[1];
				if (statusPirateShip[rest[0]] > maxHealthSection) {
					statusPirateShip[rest[0]] = maxHealthSection;
				}
			}
		} else {
			const threshold = maxHealthSection * 0.2;
			const sectionsToRepair = statusPirateShip.filter(
				section => section < threshold
			).length;
			console.log(`${sectionsToRepair} sections need repair.`);
		}
	}
	const pirateShipSum = statusPirateShip.reduce((a, b) => a + b);
	const warShipSum = statusWarShip.reduce((a, b) => a + b);
	console.log(`Pirate ship status: ${pirateShipSum}`);
	console.log(`Warship status: ${warShipSum}`);
}
trackBattle([
	'12>13>11>20>66',
	'12>22>33>44>55>32>18',
	'70',
	'Fire 2 11',
	'Fire 8 100',
	'Defend 3 6 11',
	'Defend 0 3 5',
	'Repair 1 33',
	'Status',
	'Retire',
]);
