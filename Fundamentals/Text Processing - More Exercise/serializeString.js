function serializeString(arr) {
	// create collection
	let charIndexes = {};
	const string = arr[0];

    // parse the input
	for (let i = 0; i < string.length; i++) {
		const char = string[i];

		if (!charIndexes.hasOwnProperty(char)) {
			charIndexes[char] = { indexes: [i] };
		} else {
			charIndexes[char].indexes.push(i);
		}
	}

    // create Object entries variable to loop and print the result
	const entries = Object.entries(charIndexes);

    // print the output
	for (const [char, obj] of entries) {
		console.log(`${char}:${obj.indexes.join('/')}`);
	}
}
serializeString(['avjavamsdmcalsdm']);
