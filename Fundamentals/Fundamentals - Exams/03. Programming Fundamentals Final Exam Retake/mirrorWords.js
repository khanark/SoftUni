function findMirrors(string) {
	// create the regex, collection to store the mirror words and counter for the valid words
	const regex = /([@#])(?<first>[a-zA-Z]{3,})\1\1(?<second>[a-zA-Z]{3,})/g;
	let validWords = 0;
	const mirrorWords = new Set();
	let match = regex.exec(string);

	// loop all the matches and store the result
	while (match) {
		validWords++;
		const isMirror =
			match.groups.first === match.groups.second.split('').reverse().join('');

		if (isMirror) {
			const result = `${match.groups.first} <=> ${match.groups.second}`;
			mirrorWords.add(result);
		}
    
		match = regex.exec(string);
	}

	// print the output
	console.log(
		validWords == 0 ? 'No word pairs found!' : `${validWords} word pairs found!`
	);
	console.log(
		mirrorWords.size == 0
			? 'No mirror words!'
			: `The mirror words are:\n${Array.from(mirrorWords).join(', ')}`
	);
}
findMirrors(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);
