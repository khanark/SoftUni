function findEmoji(string) {
	// create collection
	const validEmojis = []

	// calculate the threshold
	const coolThreshold = string[0]
		.match(/\d/g)
		.map(Number)
		.reduce((a, b) => a * b);

	// filter all the valid emojis
	const emojis = string[0].match(/(:{2}|\*{2})([A-Z][a-z]{2,})\1/g);

	console.log(`Cool threshold: ${coolThreshold}`);
	console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

	// store all the cool emojis
	for (const emoji of emojis) {
		const value = emoji
			.match(/\w/g)
			.map(el => el.charCodeAt())
			.reduce((a, b) => a + b);

		if (value > coolThreshold) {
			validEmojis.push(emoji)
		}
	}

	// print the output
	validEmojis.forEach(el => console.log(el));
}
findEmoji([
	"It is a long established fact that  a reader will be distracted by  the readable content of a page when looking at its 3 layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal  distribution of  letters, as opposed to using 'Content here, content  here', making it look like readable **English**.",
]);
