function memoryGame(arr) {
	// create initial array and counters
	const elements = arr.shift().split(' ');
	let turns = 0;
	let moves = 1;

	// parse the input
	while (arr[0] !== 'end') {
		if (elements.length == 0) break;
		const integers = arr.shift().split(' ').map(Number);

		// if integers are equal there is not match
		if (
			integers[0] === integers[1] ||
			integers.some(integer => !elements.includes(elements[integer]))
		) {
			elements.splice(elements.length / 2, 0, `-${moves}a`);
			console.log('Invalid input! Adding additional elements to the board');
		} else {

			// if elements are equal there is a match and we remove the elements from the elements array
			if (elements[integers[0]] === elements[integers[1]]) {
				const element = elements[integers[0]];

				for (const integer of integers) {
					elements.splice(elements.indexOf(element), 1);
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
memoryGame(['a 2 4 a 2 4', '4 0', '0 2', '0 1', '0 1', 'end']);
