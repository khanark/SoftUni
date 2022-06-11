function printTop(string) {
	// parse the input
	const myArr = string.split(' ').map(Number);

	// calculate the average
	const average = myArr.reduce((a, b) => a + b) / myArr.length;
	const result = myArr.filter(n => n > average).sort((a, b) => b - a);

	if (result.length > 0) {
		console.log(result.slice(0, 5).join(' '));
	} else {
		console.log('No');
	}
}
printTop('5 2 3 4 -10 30 40 50 20 50 60 60 51');
