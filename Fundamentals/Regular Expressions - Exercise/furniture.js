function calcCost(arr) {
	// create variable to sum the result
	let sum = 0;

	console.log(`Bought furniture:`);
	// parse the input
	for (const string of arr) {
		if (string === 'Purchase') {
			break;
		}
		// create pattern (regEx)
		const pattern = />>(?<furniture>\w+)<<(?<price>\d+.?\d+)!(?<quantity>\d+)/g;
		const match = pattern.exec(string);

		if (match !== null) {
		console.log(match.groups.furniture);
		sum += Number(match.groups.price) * Number(match.groups.quantity)
		}
	}

	// print the output
	console.log(`Total money spend: ${sum.toFixed(2)}`);
}
calcCost(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
