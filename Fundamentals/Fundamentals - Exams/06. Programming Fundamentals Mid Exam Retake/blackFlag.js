function checkIfReached(arr) {
	arr = arr.map(Number);
	// create initial variables
	const daysOfPlunder = arr[0];
	const dailyPlunder = arr[1];
	const expectedPlunder = arr[2];
	let totalPlunder = 0;

	// calc the total plunder
	for (let i = 1; i <= daysOfPlunder; i++) {
		totalPlunder += dailyPlunder;

		if (i % 3 === 0) {
			const additionalPercent = dailyPlunder * 0.5;
			totalPlunder += additionalPercent;
		}
		if (i % 5 === 0) {
			totalPlunder *= 0.7;
		}
	}

	// print the output
	if (totalPlunder >= expectedPlunder) {
		console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
	} else {
		const percentage = (totalPlunder / expectedPlunder) * 100;
		console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
	}
}
checkIfReached(['5', '40', '100']);
