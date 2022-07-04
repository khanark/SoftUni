function assembleCar(obj) {
	// all the engine types
	const engines = {
		'Small engine': { power: 90, volume: 1800 },
		'Normal engine': { power: 120, volume: 2400 },
		'Monster engine': { power: 200, volume: 3500 },
	};

	// the output object
	const car = {
		model: obj.model,
		engine: {},
		carriage: { type: obj.carriage, color: obj.color },
		wheels: [],
	};

	// get the smallest possible / closest type of engine
	const result = Object.entries(engines).map(a => a[1].power);
	const smallestEnginePower = result.filter(el => el >= obj.power)[0];

	for (const [engineType, obj] of Object.entries(engines)) {
		if (obj.power == smallestEnginePower) {
			// storing the engine type in the newly car object
			car.engine = engines[engineType];
			break;
		}
	}

	// create the value for the wheels' size and pushing it in the car's wheels array
	let size = 0;
	obj.wheelsize % 2 == 0
		? (size = obj.wheelsize - 1)
		: (size = obj.wheelsize);

	for (let i = 1; i <= 4; i++) {
		car.wheels.push(size);
	}

	// return the result of the function
	return car;
}
assembleCar({
	model: 'VW Golf II',
	power: 110,
	color: 'blue',
	carriage: 'hatchback',
	wheelsize: 14,
});
