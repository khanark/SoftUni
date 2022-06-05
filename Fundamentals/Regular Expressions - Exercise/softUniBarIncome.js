function calcTotal(arr) {
	// create collection
	let totalSum = 0;

	// parse the input
	for (const line of arr) {
		if (line === 'end of shift') {
			break;
		}
		// create the pattern
		const pattern =
			/%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+.?\d+)\$/g;
		const result = pattern.exec(line);

		if (result !== null) {
			const name = result.groups.name;
			const product = result.groups.product;
			const count = Number(result.groups.count);
			const price = Number(result.groups.price);

			console.log(`${name}: ${product} - ${(count * price).toFixed(2)}`);
			totalSum += count * price;
		}
	}

	// print the output
	console.log(`Total income: ${totalSum.toFixed(2)}`);
}
calcTotal([
	'%InvalidName%<Croissant>|2|10.3$',
	'%Peter%<Gum>1.3$',
	'%Maria%<Cola>|1|2.4',
	'%Valid%<Valid>valid|10|valid20$',
	'end of shift',
]);
console.log('----');
calcTotal([
	'%George%<Croissant>|2|10.3$',
	'%Peter%<Gum>|1|1.3$',
	'%Maria%<Cola>|1|2.4$',
	'end of shift',
]);
