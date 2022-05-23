function storage(arr) {
	let storage = new Map();

	for (const line of arr) {
		const tokens = line.split(' ');
		const product = tokens[0];
		const quantity = Number(tokens[1]);

		if (!storage.has(product)) {
			storage.set(product, quantity);
		} else {
			let currentQuantity = storage.get(product);
			let newQuantity = (currentQuantity += quantity);
			storage.set(product, newQuantity);
		}
	}

  // first example of printing the output using the name of the map
  // because it returst entries ( KVP )
	for (const [key, value] of storage) {
	  console.log(key, "->", value)
	}
  // second exmaple of printing the output using the keys of the map
  // and then accessing the keys by using the get operator on the main map varible
	for (const key of storage.keys()) {
		console.log(key, '->', storage.get(key));
	}
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
console.log('--');
storage(['apple 50', 'apple 61', 'coffee 115', 'coffee 40']);
