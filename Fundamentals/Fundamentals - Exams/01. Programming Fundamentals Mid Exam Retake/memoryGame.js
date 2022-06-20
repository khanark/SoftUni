function memoryGame(arr) {
	// create initial array and counters
	const elements = arr.shift().split(' ');
	let turns = 0;
	let moves = 1;

	// parse the input
	while (arr[0] !== 'end') {
		if (elements.length == 0) break
		const integers = arr.shift().split(' ').map(Number);

		if (
			integers[0] === integers[1] ||
			integers.some(integer => !elements.includes(elements[integer]))
		) {
			// creating add function
			const add = element => {
				for (let i = 0; i < 2; i++) {
					elements.splice(elements.length / 2, 0, element);
				}
			};

			add(`-${moves}a`);
			console.log('Invalid input! Adding additional elements to the board');
		} else {
			if (elements[integers[0]] === elements[integers[1]]) {
				const element = elements[integers[0]];

				for (const integer of integers) {
						elements.splice(elements.indexOf(element), 1)
				}
				console.log(`Congrats! You have found matching elements - ${element}!`);
				turns++;
			} else {
				console.log('Try again!');
			}
		}
		moves++;
	}

	// print the output
	console.log(
		elements.length > 0
			? `Sorry you lose :(\n${elements.join(' ')}`
			: `You have won in ${turns} turns!`
	);
}