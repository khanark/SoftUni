function cardGame(arr) {
	let personHands = {};
	const cardPowers = {
		1: 10,
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
		7: 7,
		8: 8,
		9: 9,
		J: 11,
		Q: 12,
		K: 13,
		A: 14,
	};
	const cardType = {
		C: 1,
		D: 2,
		H: 3,
		S: 4,
	};

	for (const line of arr) {
		let [name, cards] = line.split(': ');
		cards = cards.split(', ');

		if (!personHands.hasOwnProperty(name)) {
			personHands[name] = new Set();
		}

		for (const card of cards) {
			personHands[name].add(card);
		}
	}
	for (const [name, cards] of Object.entries(personHands)) {
		let sum = 0
		for (const card of cards) {
			let cardPoint = cardPowers[card[0]]
			let type = cardType[card.slice(-1)]
			sum += cardPoint * type
		}
		console.log(`${name}: ${sum}`);
	}
}

cardGame([
	'Peter: 2C, 4H, 9H, AS, QS',
	'Tomas: 3H, 10S, JC, KD, 5S, 10S',
	'Andrea: QH, QC, QS, QD',
	'Tomas: 6H, 7S, KC, KD, 5S, 10C',
	'Andrea: QH, QC, JS, JD, JC',
	'Peter: JD, JD, JD, JD, JD, JD',
]);
