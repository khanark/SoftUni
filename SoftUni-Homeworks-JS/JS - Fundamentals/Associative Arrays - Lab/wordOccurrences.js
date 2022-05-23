function sortWords(arr) {
	let map = new Map();

	for (const word of arr) {
		let counter = 1;
		if (!map.has(word)) {
			map.set(word, counter);
		} else {
			let currentCount = map.get(word);
			let newCount = (currentCount += 1);
			map.set(word, newCount);
		}
	}
	const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
	for (const [word, value] of sorted) {
		console.log(word, '->', value + ' times');
	}
}
sortWords([
	'Here',
	'is',
	'the',
	'first',
	'sentence',
	'Here',
	'is',
	'another',
	'sentence',
	'And',
	'finally',
	'the',
	'third',
	'sentence',
]);
