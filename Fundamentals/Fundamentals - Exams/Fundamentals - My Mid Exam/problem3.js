function solve(arr) {
	const cards = arr.shift().split(', ');
	let numberOfLines = Number(arr.shift());

	for (let i = 0; i < numberOfLines; i++) {
		let line = arr.shift().split(', ');
		let command = line[0];

		switch (command) {
			case 'Add':
				if (!cards.includes(line[1])) {
					cards.push(line[1]);
					console.log('Card successfully added');
				} else {
					console.log('Card is already in the deck');
				}
				break;
			case 'Remove':
				if (cards.includes(line[1])) {
					cards.splice(cards.indexOf(line[1]), 1);
					console.log('Card successfully removed');
				} else {
					console.log('Card not found');
				}
				break;
			case 'Remove At':
				let index = Number(line[1]);

				if (index >= 0 && index < cards.length) {
					cards.splice(index, 1);
					console.log('Card successfully removed');
				} else {
					console.log('Index out of range');
				}
				break;
			case 'Insert':
				let currentIndex = Number(line[1]);
				let card = line[2];

				if (currentIndex >= 0 && currentIndex < cards.length) {
					if (!cards.includes(card)) {
						cards.splice(currentIndex, 0, card);
						console.log('Card successfully added');
					} else {
						console.log('Card is already added');
					}
				} else {
					console.log('Index out of range');
				}
		}
	}

	console.log(cards.join(', '));
}
solve([
	'Jack of Spades, Ace of Clubs, Jack of Clubs',
	'2',
	'Insert, -1, Queen of Spades',
	'Remove At, 1',
]);
