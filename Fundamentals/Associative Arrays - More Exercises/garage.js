function storeCars(arr) {
	// create collection
	let garage = {};
	// parse the input
	for (const line of arr) {
		const [garageNum, token] = line.split(' - ');
		if (!garage.hasOwnProperty(garageNum)) {
			garage[garageNum] = [];
		}
		garage[garageNum].push(token.split(': ').join(' - '));
	}
	// print the output
	for (const [garageNum, arrays] of Object.entries(garage)) {
    console.log(`Garage № ${garageNum}`);
		for (const line of arrays) {
			console.log(`--- ${line}`);
		}
	}
}
storeCars([
	'1 - color: blue, fuel type: diesel',
	'1 - color: red, manufacture: Audi',
	'2 - fuel type: petrol',
	'4 - color: dark blue, fuel type: diesel, manufacture: Fiat',
]);
