function race(arr) {
	// create participants array
	const participants = arr.shift();

	// create collection
	let winners = {};

	// parse the input
	for (const line of arr) {
		if (line === 'end of race') {
			break;
		}
		const name = line.match(/[A-Za-z]/g).join('');
		const result = line
			.match(/\d/g)
			.map(num => Number(num))
			.reduce((a, b) => a + b);
		if (participants.includes(name)) {
			if (!winners.hasOwnProperty(name)) {
				winners[name] = result;
			} else {
				winners[name] += result;
			}
		}
	}
	const sorted = Object.entries(winners).sort((a, b) => b[1] - a[1]);

	// print the output
	console.log(`1st place: ${sorted[0][0]}`);
	console.log(`2nd place: ${sorted[1][0]}`);
	console.log(`3rd place: ${sorted[2][0]}`);
}
race([
	'George, Peter, Bill, Tom',
	'G4e@55or%6g6!68e!!@ ',
	'R1@!3a$y4456@',
	'B5@i@#123ll',
	'G@e54o$r6ge#',
	'7P%et^#e5346r',
	'T$o553m&6',
	'end of race',
]);
