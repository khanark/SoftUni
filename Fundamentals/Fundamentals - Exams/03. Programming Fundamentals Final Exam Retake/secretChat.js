function reveal(arr) {
  // take the string out of the array of strings
	let string = arr.shift();

  // loop the array of commands
	while (arr[0] !== 'Reveal') {
		const line = arr.shift();
		const command = line.split(':|:')[0];

		switch (command) {
			case 'InsertSpace':
				const index = line.split(':|:')[1];
				string =
					string.slice(0, index) + ' ' + string.slice(index, string.length);
				break;
			case 'Reverse':
				const substring = line.split(':|:')[1];
				if (string.includes(substring)) {
					const reverted = substring.split('').reverse().join('');
					string = string.replace(substring, '');
					string += reverted;
				} else {
					console.log('error');
					continue;
				}
				break;
			case 'ChangeAll':
				const oldString = line.split(':|:')[1];
				const newString = line.split(':|:')[2];
				string = string.split(oldString).join(newString);
				break;
		}

    // print the current state of the string
		console.log(string);
	}

  // print the final output
	console.log(`You have a new text message: ${string}`);
}
reveal([
	'Hiware?uiy',
	'ChangeAll:|:i:|:o',
	'Reverse:|:?uoy',
	'Reverse:|:jd',
	'InsertSpace:|:3',
	'InsertSpace:|:7',
	'Reveal',
]);
