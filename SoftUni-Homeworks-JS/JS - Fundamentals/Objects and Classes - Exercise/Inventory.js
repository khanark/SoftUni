function renderInventory(arr) {
	let allHeroes = [];

	for (const currentLine of arr) {
		// const tokens = currentLine.split(" / ")
		const [Hero, level, items = new Array()] = currentLine.split(' / ');
		const heroes = { Hero, level, items };
		allHeroes.push(heroes);
	}

	allHeroes.sort((a, b) => a.level - b.level);

	for (const obj of allHeroes) {
		const properties = Object.keys(obj);

		for (prop of properties) {
			if (prop === 'Hero') {
				console.log(`${prop}: ${obj[prop]}`);
			} else if (prop === 'level') {
				console.log(`${prop} => ${obj[prop]}`);
			} else {
				console.log(`${prop} => ${obj[prop]}`);
			}
		}
	}
}
renderInventory([
	'Isacc / 25 / Apple, GravityGun',
	'Derek / 12 / BarrelVest, DestructionSword',
	'Hes / 1 / Desolator, Sentinel, Antara',
]);
