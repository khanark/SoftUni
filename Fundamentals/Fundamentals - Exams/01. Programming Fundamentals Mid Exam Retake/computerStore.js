function printReceipt(arr) {
	// create init values
	let totalPrice = 0;
	const typeOfCustomer = arr.pop();


	// parse the input
	for (const price of arr) {
		if (price < 0) {
			console.log('Invalid price!');
			continue;
		}
		totalPrice += Number(price);
	}

	// check if total price > 0
	if (totalPrice > 0) {
		const taxes = totalPrice * 0.2;
		let priceWithTaxes = totalPrice + taxes;

		if (typeOfCustomer === 'special') {
			priceWithTaxes *= 0.9;
		}

		// print the output
		console.log("Congratulations you've just bought a new computer!");
		console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
		console.log(`Taxes: ${taxes.toFixed(2)}$`);
		console.log('-----------');
		console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);
	} else {
		console.log('Invalid order!');
	}
}
printReceipt([
	'1023',
	'15',
	'-20',
	'-5.50',
	'450',
	'20',
	'17.66',
	'19.30',
	'regular',
]);
