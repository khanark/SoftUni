function decryptMessage(messages) {
	const numberOfMessages = messages.shift();
	const letters = ['s', 't', 'a', 'r'];
	let planets = { attacked: [], destroyed: [] };
	let lines = 0;

	while (lines < numberOfMessages) {
		let line = messages.shift();
		const pattern =
			/.*@(?<planetName>[A-Za-z]+).*:(?<planetPopulation>\d+).*!(?<attackType>[AD])!.*->(?<soldierCount>\d+)/g;
		lines++;

		const encryptionKey = line.match(/[star]/gi).length;
		line = line.split('').map(letter => letter.charCodeAt(0) - encryptionKey);
		line = line.map(code => String.fromCharCode(code)).join('');

		const match = pattern.exec(line);

		if (match !== null) {
			const attackType = match.groups.attackType;
			const planetName = match.groups.planetName;

			switch (attackType) {
				case 'A':
					planets.attacked.push(planetName);
					break;
				case 'D':
					planets.destroyed.push(planetName);
					break;
			}
		}
	}

	planets.attacked.sort((a, b) => a.localeCompare(b));
	planets.destroyed.sort((a, b) => a.localeCompare(b));

	console.log(`Attacked planets: ${planets.attacked.length}`);
	for (const planet of planets.attacked) {
		console.log(`-> ${planet}`);
	}

	console.log(`Destroyed planets: ${planets.destroyed.length}`);
	for (const planet of planets.destroyed) {
		console.log(`-> ${planet}`);
	}
}
decryptMessage([
	'2',
	'STCDoghudd4=63333$D$0A53333',
	'EHfsytsnhf?8555&I&2C9555SR',
]);
console.log('----');
decryptMessage([
	'3',
	"tt(''DGsvywgerx>6444444444%H%1B9444",
	'GQhrr|A977777(H(TTTT',
	'EHfsytsnhf?8555&I&2C9555SR',
]);
