function performCom(string) {
  // create init variables
	let password = string.shift();
	let isReplaced = true;

  // loop the input
	while (string[0] !== 'Done') {
		const line = string.shift();
		let [command, ...rest] = line.split(' ');

    // implement the logic behind different commands
		switch (command) {
			case 'TakeOdd':

        // creating raw password
				let str = '';
				for (let i = 0; i < password.length; i++) {
					if (i % 2 != 0) {
						str += password[i];
					}
				}
				password = str;
				break;
			case 'Cut':

        // cutting out the given string
				rest = rest.map(Number);
				const cut = password.substring(rest[0], rest[0] + rest[1]);
				password = password.replace(cut, '');
				break;
			case 'Substitute':

        // replacing all the occurrences of the given string with other string
				if (password.includes(rest[0])) {
					password = password.split(rest[0]).join(rest[1]);
				} else {
					console.log('Nothing to replace!');
					isReplaced = false;
				}
				break;
		}
		if (isReplaced) {
			console.log(password);
		}
		isReplaced = true;
	}

  // print the output
	console.log(`Your password is: ${password}`);
}
performCom([
	'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr',
	'TakeOdd',
	'Cut 15 3',
	'Substitute :: -',
	'Substitute | ^',
	'Done',
]);
