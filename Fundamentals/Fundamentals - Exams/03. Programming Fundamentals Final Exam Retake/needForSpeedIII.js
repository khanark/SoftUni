function playGame(arr) {
	let num = Number(arr.shift());
	const cars = {};

	while (num-- > 0) {
		const line = arr.shift();
		const [car, mileage, fuel] = line.split('|');
		cars[car] = { mileage: Number(mileage), fuel: Number(fuel) };
	}

	for (const line of arr) {
		if (line == 'Stop') {
			break;
		}
		let [command, car, distance, currentFuel] = line.split(' : ');
		distance = Number(distance);
		currentFuel = Number(currentFuel);

		switch (command) {
			case 'Drive':
				if (cars[car].fuel >= currentFuel) {
					cars[car].mileage += distance;
					cars[car].fuel -= currentFuel;
					console.log(
						`${car} driven for ${distance} kilometers. ${currentFuel} liters of fuel consumed.`
					);
					if (cars[car].mileage >= 100000) {
						console.log(`Time to sell the ${car}!`);
						delete cars[car];
					}
				} else {
					console.log('Not enough fuel to make that ride');
				}
				break;
			case 'Refuel':
				const tank = 75;
				if (cars[car].fuel + distance > tank) {
					const refueled = tank - cars[car].fuel;
					cars[car].fuel = tank;
					console.log(`${car} refueled with ${refueled} liters`);
				} else {
					console.log(`${car} refueled with ${distance} liters`);
					cars[car].fuel += distance;
				}
				break;
			case 'Revert':
				cars[car].mileage -= distance;
				if (cars[car].mileage < 10000) {
					cars[car].mileage = 10000;
				} else {
					console.log(`${car} mileage decreased by ${distance} kilometers`);
				}
				break;
		}
	}
	for (const [car, obj] of Object.entries(cars)) {
		console.log(
			`${car} -> Mileage: ${obj.mileage} kms, Fuel in the tank: ${obj.fuel} lt.`
		);
	}
}
playGame([
	'3',
	'Audi A6|38000|62',
	'Mercedes CLS|11000|35',
	'Volkswagen Passat CC|45678|5',
	'Drive : Audi A6 : 543 : 47',
	'Drive : Mercedes CLS : 94 : 11',
	'Drive : Volkswagen Passat CC : 69 : 8',
	'Refuel : Audi A6 : 50',
	'Revert : Mercedes CLS : 500',
	'Revert : Audi A6 : 30000',
	'Stop',
]);
