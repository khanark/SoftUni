function schedule(arr) {
	const sectors = arr.shift();
	const newlyChangedStatuses = arr.shift();
	const flightStatus = arr.shift();
	let flights = {};

	for (const flight of sectors) {
		const tokens = flight.split(' ');
		const flightNumber = tokens.shift();
		const destination = tokens.join(' ');
		flights[flightNumber] = { Destination: destination };
	}

	for (const flight of newlyChangedStatuses) {
		const [flightNumber, status] = flight.split(' ');
		if (flights.hasOwnProperty(flightNumber)) {
			flights[flightNumber].Status = status;
		}
	}

	for (const flight in flights) {
		const currentFlight = flights[flight]

		if (flightStatus[0] === 'Ready to fly') {
			if (!currentFlight.hasOwnProperty('Status')) {
				currentFlight.Status = 'Ready to fly';
				console.log(currentFlight);
			}
		} else if (currentFlight.hasOwnProperty('Status')) {
			console.log(currentFlight);
		}
	}
}
schedule([
	[
		// The first array (at index 0) will hold all flights on a specific sector in the airport
		'WN269 Delaware',
		'FL2269 Oregon',
		'WN498 Las Vegas',
		'WN3145 Ohio',
		'WN612 Alabama',
		'WN4010 New York',
		'WN1173 California',
		'DL2120 Texas',
		'KL5744 Illinois',
		'WN678 Pennsylvania',
	],
	// The second array (at index 1) will contain newly changed statuses of some of the flights at this airport
	[
		'DL2120 Cancelled',
		'WN612 Cancelled',
		'WN1173 Cancelled',
		'SK430 Cancelled',
	],
	// The third array (at index 2) will have a single string, which will be the flight status you need to check
	['Cancelled'],
]);
