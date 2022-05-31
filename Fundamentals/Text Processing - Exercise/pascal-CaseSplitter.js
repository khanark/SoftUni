function splitString(string) {
	// getting the first letter of the string
	let words = [];
	let currentWord = string[0];

	// looping through all the characters in the string
	for (let i = 1; i < string.length; i++) {
		// checking if the current character is lower or upper case
		if (string[i].toUpperCase() !== string[i]) {
			currentWord = currentWord.concat(string[i]);
		} else {
			words.push(currentWord);
			currentWord = string[i];
		}
	}
	words.push(currentWord);
	console.log(words.join(', '));
}
splitString('SplitMeIfYouCanHaHaYouCantOrYouCan');
