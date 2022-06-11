function storePlants(arr) {
	// create collection and iterator
	const iterator = arr.shift();
	let plants = {};

	// store the plants
	for (let i = 0; i < iterator; i++) {
		const [plant, rarity] = arr[i].split('<->');
		if (!plants.hasOwnProperty(plant)) {
			plants[plant] = { rarity: rarity, rating: [] };
		} else {
			plants[plant].rarity = rarity;
		}
	}
	arr = arr.slice(iterator, arr.length);

	// loop the array until receiving command "Exhibition"
	while (arr[0] !== 'Exhibition') {
		const line = arr.shift();
		const token = line.split(': ');
		const command = token[0];
		const [plant, value] = token[1].split(' - ');

		if (plants.hasOwnProperty(plant)) {
			switch (command) {
				case 'Rate':
						plants[plant].rating.push(Number(value));
					break;
				case 'Update':
						plants[plant].rarity = value;
					break;
				case 'Reset':
						plants[plant].rating = [];
					break;
			}
		} else {
			console.log('error');
		}
	}

	// print the output
	console.log('Plants for the exhibition:');
	for (const [plantName, obj] of Object.entries(plants)) {
		let averageRating = 0;
		if (obj.rating.length > 0) {
			averageRating = obj.rating.reduce((a, b) => a + b) / obj.rating.length;
		} else {
			averageRating = 0;
		}
		console.log(
			`- ${plantName}; Rarity: ${obj.rarity}; Rating: ${averageRating.toFixed(
				2
			)}`
		);
	}
}
storePlants([
	'3',
	'Arnoldii<->4',
	'Woodii<->7',
	'aloha<->2',
	'Rate: Woodii - 10',
	'Rate: Welwitschia - 7',
	'Rate: Arnoldii - 3',
	'Rate: Woodii - 5',
	'Update: Woodii - 5',
	'Reset: Arnoldii',
	'Exhibition',
]);
