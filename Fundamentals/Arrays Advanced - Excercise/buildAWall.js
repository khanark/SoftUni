function buildWall(input) {
	// create initial variables
	let pesos = 0;
	const concreteUsedEachDay = [];

	// loop until the length of the input becomes 0
	while (input.length != 0) {
		for (let i = 0; i < input.length; i++) {
			if (input[i] == 30) {
				input.splice(input.indexOf(input[i]), 1);
				i = i - 1
			} else {
				input[i]++;
				pesos += 195 * 1900;
			}
		}
		if (input.length == 0) {
			break
		} else {
			concreteUsedEachDay.push(195 * input.length);
		}
	}

	// print the output
	console.log(concreteUsedEachDay.join(', '));
	console.log(pesos + ' pesos');
}
buildWall([21, 25, 28]);