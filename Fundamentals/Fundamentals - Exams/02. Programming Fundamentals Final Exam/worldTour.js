function createPlan(arr) {
  // create the initial string
	let string = arr.shift();

  // parse the input
	while (arr[0] !== 'Travel') {
		const token = arr.shift().split(':');
		const command = token[0];

		switch (command) {
			case 'Add Stop':
				const isValid = token[1] >= 0 && token[1] <= string.length - 1;

				if (isValid) {
					string = addStop(string, token[1], token[2]);
				}
				break;
			case 'Remove Stop':
        const isValidFirst = token[1] >= 0 && token[1] <= string.length - 1
        const isValidSecond = token[2] >= 0 && token[2] <= string.length - 1;

        if (isValidFirst && isValidSecond) {
				string = removeStop(string, Number(token[1]), Number(token[2]) + 1);
        }
				break;
			case 'Switch':
				string = switchDestination(string, token[1], token[2]);
				break;
		}

    // print the current output of the edited string
		console.log(string);
	}

  // create function for each case
	function addStop(str, index, value) {
		return str.substring(0, index) + value + str.substring(index);
	}

	function removeStop(str, startIndex, endIndex) {
		return (
			str.slice(0, startIndex) + str.substring(endIndex, str.length + endIndex)
		);
	}

	function switchDestination(str, oldDestination, newDestination) {
		return str.split(oldDestination).join(newDestination);
	}

  // print the output
	console.log(`Ready for world tour! Planned stops: ${string}`);
}
createPlan([
	'Hawai::Cyprys-Rome',
	'Add Stop:7:Rome',
	'Remove Stop:11:16',
	'Switch:Rome:Bulgaria',
	'Travel',
]);
