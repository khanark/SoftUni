function parkingLot(arr) {
	let parking = new Set();

	for (const line of arr) {
		const [command, carNumber] = line.split(', ');
		if (command === 'IN') {
			parking.add(carNumber);
		} else {
			parking.delete(carNumber);
		}
	}
	const result = Array.from(parking.keys()).sort((a, b) => a.localeCompare(b));
	result.forEach(car => console.log(car));
}
parkingLot([
	'IN, CA2844AA',
	'IN, CA1234TA',
	'OUT, CA2844AA',
	'IN, CA9999TT',
	'IN, CA2866HI',
	'OUT, CA1234TA',
	'IN, CA2844AA',
	'OUT, CA2866HI',
	'IN, CA9876HH',
	'IN, CA2822UU',
]);
