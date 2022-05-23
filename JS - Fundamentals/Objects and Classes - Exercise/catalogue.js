function storedCalalogue(arr) {
	let products = {};
	let lastLetter = '';

	for (const product of arr) {
		const [productName, productPrice] = product.split(' : ');
		products[productName] = { name: productName, price: productPrice };
	}

	const sortedProducts = Object.keys(products).sort((a, b) => a.localeCompare(b));

	for (const product of sortedProducts) {
		const print = () =>
			console.log(`  ${products[product].name}: ${products[product].price}`);
		let group = product[0];

		if (group !== lastLetter) {
      console.log(group);
    }

    print()
    lastLetter = group
	}
}

storedCalalogue([
	'Appricot : 20.4',
	'Fridge : 1500',
	'TV : 1499',
	'Deodorant : 10',
	'Boiler : 300',
	'Apple : 1.25',
	'Anti-Bug Spray : 15',
	'T-Shirt : 10',
]);
