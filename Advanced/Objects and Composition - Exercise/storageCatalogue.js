function createCatalogue(arr) {
    // create collection
	const products = {};

    // parse the input
	for (const line of arr) {
		const [product, price] = line.split(' : ');
		const letter = product[0];

		if (!products[letter]) {
			products[letter] = [{ product, price: Number(price) }];
		} else {
			products[letter].push({ product, price: Number(price) });
		}
	}

    // sort the initial values
	const sortedByInitial = Object.entries(products).sort((a, b) =>
		a[0].localeCompare(b[0])
	);

    // print the output
	for (const [initial, obj] of sortedByInitial) {
		const sortedProducts = Object.values(obj).sort((a,b) => a.product.localeCompare(b.product));

		console.log(initial);
        sortedProducts.forEach(obj => console.log(`  ${obj.product}: ${obj.price}`))
	}
}
createCatalogue([
	'Appricot : 20.4',
	'Fridge : 1500',
	'TV : 1499',
	'Deodorant : 10',
	'Boiler : 300',
	'Apple : 1.25',
	'Anti-Bug Spray : 15',
	'T-Shirt : 10',
]);
