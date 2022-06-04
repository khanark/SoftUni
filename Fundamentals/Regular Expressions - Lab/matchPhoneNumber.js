function matchNumber(arrOfNumbers) {
    // create the RegEx pattern
	const pattern = /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g;

    // execute the pattern on the array of strings
	let match = pattern.exec(arrOfNumbers);

    // create collection to save the result
	let result = [];

	while (match !== null) {
		result.push(match[0].trim());
		match = pattern.exec(arrOfNumbers);
	}

    // print the output
	console.log(result.join(', '));
}
matchNumber([
	'+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222',
]);
