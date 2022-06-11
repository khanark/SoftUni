function decryptMessage(arr) {
  // create a variable with the msg to edit
	let msg = arr.shift();

  // loop the commands
	for (const line of arr) {
		if (line === 'Decode') {
			break;
		} else {
			const token = line.split('|');
			const command = token[0];

      // different case scenarios
			switch (command) {
        case 'Move':
          const value = token[1]
					msg = msg.slice(value) + msg.slice(0, value);
					break;
				case 'Insert':
					const index = token[1];
					const letter = token[2];
					msg = msg.substring(0, index) + letter + msg.substr(index);
					break;
				case 'ChangeAll':
					const oldLetter = token[1];
					const newLetter = token[2];
					msg = msg.split(oldLetter).join(newLetter);
					break;
			}
		}
	}

  // print the output
	console.log(`The decrypted message is: ${msg}`);
}
decryptMessage([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
]
);
