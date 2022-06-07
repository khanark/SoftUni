function signParticipants(participants) {
	// create variables for the participant's health and dmg
	const lines = participants.split(', ');

	// create collection
	let demons = {};

	// parse the input
	for (const line of lines) {
		let health = line.match(/[^0-9+\-*\/.]/g);
		let dmg = line.match(/-?\d+(\.\d+)?/g);
		let altering = line.match(/[*\/]/g);
		demons[line] = { health: 0, dmg: 0 };

		// demon's health
		if (health !== null) {
			health = health.map(char => char.charCodeAt(0)).reduce((a, b) => a + b);
			demons[line].health = health;
		}

		// demon's dmg
		if (dmg !== null) {
			dmg = dmg.map(Number).reduce((a, b) => a + b);
			demons[line].dmg = dmg;
		}

		// if there is "*" or "/" in demon's name we further alter his dmg
		if (altering !== null) {
			for (const alter of altering) {
				alter === '*' ? (demons[line].dmg *= 2) : (demons[line].dmg /= 2);
			}
		}
	}

	// filter collection by demon's name
	const filteredByName = Object.entries(demons).sort((a, b) =>
		a[0].localeCompare(b[0])
	);

	// parse the input
	for (const [name, obj] of filteredByName) {
		console.log(`${name} - ${obj.health} health, ${obj.dmg.toFixed(2)} damage`);
	}
}
signParticipants(`M3ph 1st0**, Azazel`);
// signParticipants('M3ph-0.5s-0.5t0.0**');
// signParticipants('Gos/ho');
