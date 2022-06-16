function renderKey(arr) {
	// create the key
	let activationKey = arr.shift();

	// parse the input
	for (const line of arr) {
		if (line == 'Generate') {
			break;
		}
		const command = line.split('>>>')[0];

		// implement logic for different case scenarios
		if (command == 'Contains') {
			const substring = line.split('>>>')[1];
			contains(activationKey, substring);
		} else if (command == 'Flip') {
			const casing = line.split('>>>')[1];
			const startIndex = line.split('>>>')[2];
			const endIndex = line.split('>>>')[3];
			const substring = activationKey.slice(startIndex, endIndex);

			activationKey = flip(activationKey, substring, casing);
			console.log(activationKey);
		} else {
			const startIndex = line.split('>>>')[1];
			const endIndex = line.split('>>>')[2];
			const substring = activationKey.slice(startIndex, endIndex);

			activationKey = slice(activationKey, substring);
			console.log(activationKey);
		}
	}

  // create functions for different case scenarios
	function contains(string, substring) {
		if (string.includes(substring)) {
			console.log(`${string} contains ${substring}`);
		} else {
			console.log('Substring not found!');
		}
	}

	function flip(string, substring, casing) {
		if (casing == 'Upper') {
			return (string = string.replace(substring, substring.toUpperCase()));
		} else {
			return (string = string.replace(substring, substring.toLowerCase()));
		}
	}

	function slice(string, substring) {
		return (string = string.replace(substring, ''));
	}
  
	// print the output
	console.log(`Your activation key is: ${activationKey}`);
}
renderKey([
	'134softsf5ftuni2020rockz42',
	'Slice>>>3>>>7',
	'Contains>>>-rock',
	'Contains>>>-uni-',
	'Contains>>>-rocks',
	'Flip>>>Upper>>>2>>>8',
	'Flip>>>Lower>>>5>>>11',
	'Generate',
]);
