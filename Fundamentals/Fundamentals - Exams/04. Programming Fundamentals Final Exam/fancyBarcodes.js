function isValid(arr) {
  // take the number of strings in the array
	let numberOfStrings = Number(arr.shift());
	arr = arr.slice(0, numberOfStrings);

  // create the pattern
	const pattern = /(@#+)[A-Z][a-zA-Z0-9]{4,}[A-Z](@[#]+)/g;

  // loop the array and check if string is valid
	for (const string of arr) {
		const isValid = string.match(pattern);
		let group = string.match(/\d/g);

    // print the output
		if (isValid) {
			if (group) {
				console.log(`Product group: ${group.join('')}`);
			} else {
				console.log(`Product group: 00`);
			}
		} else {
			console.log('Invalid barcode');
		}
	}
}
isValid([
	'6',
	'@###Val1d1teM@###',
	'@#ValidIteM@###',
	'##InvaliDiteM##',
	'@InvalidIteM@',
	'#Invalid_IteM#',
	'@#ValiditeM@#',
]);
