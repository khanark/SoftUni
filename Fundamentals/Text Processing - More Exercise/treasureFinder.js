function decrypt(arr) {
	// parse the input
	const keys = arr.shift().split(' ');
	let index = 0;
	let printString = '';

	// create result array
	let result = [];

	// loop while the command "find" isn't found
	while (arr[0] !== 'find') {
		let strings = arr.shift();

		// loop all the chars from the string line
		for (const char of strings) {
			const newValue = String.fromCharCode(
				(char.charCodeAt() - keys[index]).toString()
			);

			// concatenate the new char with the previous value
			printString += newValue;
			index == keys.length - 1 ? (index = 0) : index++;
		}

		// store the result of the first line and resetting
		result.push(printString);
		printString = '';
		index = 0;
	}

	// print the output
	for (const string of result) {
		const material = string.substring(
			string.indexOf('&') + 1,
			string.lastIndexOf('&')
		);
		const coordinates = string.slice(
			string.lastIndexOf('<') + 1,
			string.lastIndexOf('>')
		);
		console.log(`Found ${material} at ${coordinates}`);
	}
}
decrypt([
	'1 2 1 3',
	"ikegfp'jpne)bv=41P83X@",
	"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
	'find',
]);
