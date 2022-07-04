function storeJSONdata(arr) {
    // create collection of array to store the heroes
	const collection = [];

    // parse the input and create a hero object
	for (const line of arr) {
		let [name, level, items] = line.split(' / ');
		level = Number(level);

		const allItems = (items = items ? items.split(', ') : []);
		const hero = { name, level, items: allItems };
		collection.push(hero);
	}

    // print the output
	console.log(JSON.stringify(collection));
}
storeJSONdata([
	'Isacc / 25 / Apple, GravityGun',
	'Derek / 12 / BarrelVest, DestructionSword',
	'Hes / 1 / Desolator, Sentinel, Antara',
]);
