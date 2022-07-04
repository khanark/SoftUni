function assignCalories(arr) {
	// create collection
	const products = {};

	// store the products
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 == 0) {
			products[arr[i]] = Number(arr[i + 1]);
		}
	}

	// print the output
	console.log(products);
}
assignCalories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
