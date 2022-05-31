function replaceChars(repeatingChars) {
    // getting the first letter
	let result = repeatingChars[0];

    // looping through all the letters
	for (let i = 0; i < repeatingChars.length; i++) {
		const char = repeatingChars[i];
		const nextChar = repeatingChars[i + 1];

        // checking of the first letter is different than the second
        // if so, adding the second letter to the result
		if (char !== nextChar) {
			if (nextChar === undefined) {
				break;
			} else {
				result += nextChar;
			}
		}
	}

    // printing the output
	console.log(result);
}
replaceChars('qqqwerqwecccwd');
