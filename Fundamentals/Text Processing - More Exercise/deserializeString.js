function deserializeString(arr) {
	// create empty array
	let result = [];

	// parse the input
	while (arr[0] !== 'end') {
		let line = arr.shift();

		let [char, indexes] = line.split(':');
		indexes = indexes.split('/').map(index => Number(index));

		// loop through all the indexes
		for (const index of indexes) {
			result[index] = char;
		}
	}

	// print the output
	console.log(result.join(''));
}
deserializeString([
	'a:0/3/5/11',
	'v:1/4',
	'j:2',
	'm:6/9/15',
	's:7/13',
	'd:8/14',
	'c:10',
	'l:12',
	'end',
]);
