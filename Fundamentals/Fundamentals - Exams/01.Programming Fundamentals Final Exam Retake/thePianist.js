function thePianist(arr) {
	// create collection
	let composerObj = {};
	// take the length of the initial elements of the input
	const length = arr.shift();
	// make initial counter to count the input
	let counter = 0;
	// parse the input
	while (counter != length) {
		let line = arr.shift();
		const [piece, composer, key] = line.split('|');
		composerObj[piece] = { composer: composer, key: key };
		counter++;
	}
	// loop and moderate the original object by the given commands
	while (arr[0] !== 'Stop') {
		let line = arr.shift();
		const [command, piece, composer, key] = line.split('|');
		switch (command) {
			// add new piece
			case 'Add':
				if (!composerObj.hasOwnProperty(piece)) {
					composerObj[piece] = { composer: composer, key: key };
					console.log(
						`${piece} by ${composer} in ${key} added to the collection!`
					);
				} else {
					console.log(`${piece} is already in the collection!`);
				}
				break;
			// remove piece if already exist
			case 'Remove':
				if (composerObj.hasOwnProperty(piece)) {
					delete composerObj[piece];
					console.log(`Successfully removed ${piece}!`);
				} else {
					console.log(
						'Invalid operation! {piece} does not exist in the collection.'
					);
				}
				break;
			// change the current key of the object
			case 'ChangeKey':
				if (composerObj.hasOwnProperty(piece)) {
					composerObj[piece].key = composer;
					console.log(`Changed the key of ${piece} to ${composer}!`);
				} else {
					console.log(
						'Invalid operation! {piece} does not exist in the collection.'
					);
				}
		}
	}
	// print the output
	for (const [key, value] of Object.entries(composerObj)) {
		console.log(`${key} -> Composer: ${value.composer}, Key: ${value.key}`);
	}
}
thePianist([
	'3',
	'Fur Elise|Beethoven|A Minor',
	'Moonlight Sonata|Beethoven|C# Minor',
	'Clair de Lune|Debussy|C# Minor',
	'Add|Sonata No.2|Chopin|B Minor',
	'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
	'Add|Fur Elise|Beethoven|C# Minor',
	'Remove|Clair de Lune',
	'ChangeKey|Moonlight Sonata|C# Major',
	'Stop',
]);
