function sequences(arrOfStrings) {
	let mixedArrays = {};

	for (const currentArray of arrOfStrings) {
		const newArr = JSON.parse(currentArray).sort((a, b) => a - b);
		let string = newArr.join(' ');

		if (!mixedArrays.hasOwnProperty(string)) {
			mixedArrays[string] = newArr;
		}
	}
	const arrays = Object.values(mixedArrays).sort((a, b) => a.length - b.length);
	for (const arr of arrays) {
		console.log(`[${arr.sort((a, b) => b - a).join(', ')}]`);
	}
}
sequences([
	'[-3, -2, -1, 0, 1, 2, 3, 4]',
	'[10, 1, -17, 0, 2, 13]',
	'[4, -3, 3, -2, 2, -1, 1, 0]',
]);
console.log(' ');
sequences([
	'[7.14, 7.180, 7.339, 80.099]',
	'[7.339, 80.0990, 7.140000, 7.18]',
	'[7.339, 7.180, 7.14, 80.099]',
]);
