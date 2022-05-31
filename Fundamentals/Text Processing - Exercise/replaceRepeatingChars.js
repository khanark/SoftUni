function replaceChars(repeatingChars) {
	let result = repeatingChars[0];

	for (let i = 0; i < repeatingChars.length; i++) {
		const char = repeatingChars[i];
		const nextChar = repeatingChars[i + 1];

		if (char !== nextChar) {
			if (nextChar === undefined) {
				break;
			} else {
				result += nextChar;
			}
		}
	}
	console.log(result);
}
replaceChars('qqqwerqwecccwd');
