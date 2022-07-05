function findLowestPrice(arr) {
	// create collection
	const products = {};

	// parse the input
	for (const line of arr) {
		const [town, product, price] = line.split(' | ');

		if (!products[product]) {
			products[product] = { town, price: Number(price)};
		} else if (products[product].price > Number(price)) {
			products[product].price = Number(price);
            products[product].town = town
		}
	}

	// print the output
	for (const [product, obj] of Object.entries(products)) {
		console.log(`${product} -> ${obj.price} (${obj.town})`);
	}
}
findLowestPrice([
	'Sofia City | Audi | 100000',
	'Sofia City | BMW | 100000',
	'Sofia City | Mitsubishi | 10000',
	'Sofia City | Mercedes | 10000',
	'Sofia City | NoOffenseToCarLovers | 0',
	'Mexico City | Audi | 1000',
	'Mexico City | BMW | 99999',
	'Mexico City | Mitsubishi | 10000',
	'New York City | Mitsubishi | 1000',
	'Washington City | Mercedes | 1000',
]);
