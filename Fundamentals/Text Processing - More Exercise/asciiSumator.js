function sumBetweenTwo(arr) {
	// parse the input
	const firstCharAscii = arr[0].charCodeAt();
	const secondCharAscii = arr[1].charCodeAt();
	let string = arr[2];
	let sum = 0;

	// loop through the string of chars
	for (const char of string) {
		// create condition variable
		let isBetween =
			(char.charCodeAt() > firstCharAscii &&
				char.charCodeAt() < secondCharAscii) ||
			(char.charCodeAt() > secondCharAscii &&
				char.charCodeAt() < firstCharAscii);

		if (isBetween) {
			sum += Number(char.charCodeAt());
		}
	}

	// print the output
	console.log(sum);
}
// sumBetweenTwo(['?', 'E', '@ABCEF']);
console.log('----');
sumBetweenTwo(['?', 'E', '@ABCEF']);
console.log('----');
sumBetweenTwo(['a', '1', 'jfe392$#@j24ui9ne#@$']);
