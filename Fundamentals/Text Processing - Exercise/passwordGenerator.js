function generatePassword(arr) {
	// parse the input
	const arr1 = arr.shift();
	const arr2 = arr.shift();
	const word = arr.shift().toUpperCase();
	let index = 0;

	// create the concatenated string
	let concatenatedStr = arr1 + arr2;

	// create array of vowels
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	// looping the concatenated string
	for (let i = 0; i < concatenatedStr.length; i++) {
		const char = concatenatedStr[i];

		// looping the vowels array
		for (const vowel of vowels) {
			// checking if the current vowel is equal to the char
			if (vowel == char) {
				concatenatedStr = concatenatedStr.replace(char, word[index]);
				index == word.length - 1 ? (index = 0) : index++;
			}
		}
	}

	const password = concatenatedStr.split('').reverse().join('');

    // print the output
	console.log(`Your generated password is ${password}`);
}
generatePassword(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
