function decryptMessage(messages) {
	// create collection
	let planets = { attacked: [], destroyed: [] };

	// take the counter
	const numberOfMessages = messages.shift();
	let lines = 0;

	// parse the input
	while (lines < numberOfMessages) {
		let line = messages.shift();

    // create regex pattern
		const pattern =
			/@(?<planetName>[A-Za-z]+)[^@\-!:>]*?:(?<planetPopulation>\d+)[^@\-!:>]*?!(?<attackType>[AD])![^@\-!:>]*?->(?<soldierCount>\d+)/g;
		lines++;

    // take the encryptionKey value
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

  // sort the result
	planets.attacked.sort((a, b) => a.localeCompare(b));
	planets.destroyed.sort((a, b) => a.localeCompare(b));

  // print the output
	console.log(`Attacked planets: ${planets.attacked.length}`);
	planets.attacked.forEach(planet => console.log(planet))

	console.log(`Destroyed planets: ${planets.destroyed.length}`);
	planets.destroyed.forEach(planet => console.log(planet))
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
