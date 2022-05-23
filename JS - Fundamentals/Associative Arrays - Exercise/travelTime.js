function orderDestinations(arr) {
	// create collection
	let destination = {};
	let sortedDestination = {};

	for (const line of arr) {
		const [country, town, offer] = line.split(' > ');

		if (!destination.hasOwnProperty(country)) {
			destination[country] = new Map();
		}
		if (
			destination[country].has(town) &&
			destination[country].get(town) < offer
		) {
			continue;
		}
		destination[country].set(town, Number(offer));
	}
	let result = Object.entries(destination);

	for (const [key, value] of result) {
		let sorted = Array.from(value).sort((a, b) => a[1] - b[1]);
		for (const [town, offer] of sorted) {
			if (!sortedDestination.hasOwnProperty(key)) {
				sortedDestination[key] = new Map();
			}
			sortedDestination[key].set(town, offer);
		}
	}

	const finalResult = Object.entries(sortedDestination).sort((a, b) =>
		a[0].localeCompare(b[0])
	);

	for (const [destinationName, townOffer] of finalResult) {
		const arrayFromTownOffer = Array.from(townOffer);
		let str = '';
		for (const [town, offer] of arrayFromTownOffer) {
			str += `${town} -> ${offer} `;
		}
		console.log(`${destinationName} -> ${str}`);
	}
}
orderDestinations([
	'Bulgaria > Sofia > 500',
	'Bulgaria > Sopot > 800',
	'France > Paris > 2000',
	'Albania > Tirana > 1000',
	'Bulgaria > Sofia > 200',
]);
console.log('---');
orderDestinations([
	'Bulgaria > Sofia > 25000',
	'Bulgaria > Sofia > 26000',
	'Kalimdor > Orgrimar > 25000',
	'Albania > Tirana > 25000',
	'Bulgaria > Varna > 25010',
	'Bulgaria > Lukovit > 10',
]);
