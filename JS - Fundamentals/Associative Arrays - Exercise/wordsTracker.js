function findOccurrences(arrOfWords) {
	let result = {};
	const wordsToLookFor = arrOfWords.shift().split(' ');

	for (const word of wordsToLookFor) {
		result[word] = 0;
	}
	console.log(result);
	for (word of arrOfWords) {
		if (result.hasOwnProperty(word)) {
			result[word]++;
		}
	}
	const sorted = Object.keys(result).sort((a, b) => result[b] - result[a]);
	for (const key of sorted) {
		console.log(`${key} - ${result[key]}`)
	}
}
findOccurrences([
	'is the',
	'first',
	'sentence',
	'Here',
	'is',
	'another',
	'the',
	'And',
	'finally',
	'the',
	'the',
	'sentence',
]);
