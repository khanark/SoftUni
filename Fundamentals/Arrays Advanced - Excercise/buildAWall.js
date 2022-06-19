function buildWall(input) {
	let pesos = 0;
	const concreteEachDay = [];

	while (input.length != 0) {
		let crews = input.length;
		for (let i = 0; i < input.length; i++) {
			input[i]++;
			pesos += 195 * 1900;

			if (input[i] == 30) {
				input.splice(input.indexOf(input[i]), 1);
				i = i - 1;
			}
		}
		concreteEachDay.push(195 * crews);
	}
	console.log(concreteEachDay.join(', '));
	console.log(pesos + ' pesos');
}
buildWall([21, 25, 28]);
