function findAsciiSum(arr) {
    // parse the input
	const inputType = arr[1];
	const string = arr[0];

    // creating function to return all upper or lower case letters
	const filteredLetters = input => {
		if (input === 'UPPERCASE') {
			return string
				.split('')
				.filter(char => char.charCodeAt() >= 65 && char.charCodeAt() <= 90)
				.join('');
		} else {
			return string
				.split('')
				.filter(char => char.charCodeAt() >= 97 && char.charCodeAt() <= 122)
				.join('');
		}
	};

    // sum the ascii values of all letters
	const result = filteredLetters(inputType)
		.split('')
		.map(char => char.charCodeAt())
		.reduce((a, b) => a + b);

    // print the output
	console.log(`The total sum is: ${result}`);
}
findAsciiSum(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
