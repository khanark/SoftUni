function storeTowns(arr) {
    // we don't need the first input
	arr.shift();

    // create an array to store all the newly created objects
	const result = [];

    // parse the input
	for (const line of arr) {
		const token = line.split(' | ');
		const Town = token[0].replace('| ', '');
		let Latitude = Number(token[1]).toFixed(2);
		let Longitude = Number(token[2].replace(' |', '')).toFixed(2);

		Latitude = Number(Latitude);
		Longitude = Number(Longitude);

		const obj = {
			Town: Town,
			Latitude: Latitude,
			Longitude: Longitude,
		};

		result.push(obj);
	}

    // print the output
	console.log(JSON.stringify(result));
}
storeTowns([
	'| Town | Latitude | Longitude |',
	'| Sofia | 42.696552 | 23.32601 |',
	'| Beijing | 39.913818 | 116.363625 |',
]);
