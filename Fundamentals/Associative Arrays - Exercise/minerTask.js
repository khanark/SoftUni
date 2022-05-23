function collect(arr) {
	// create collection
	let resouces = {};
	// parse the input using for loop for the stepping feature
	for (let pair = 0; pair < arr.length; pair += 2) {
		const name = arr[pair];
		const value = Number(arr[pair + 1]);
		if (!resouces.hasOwnProperty(name)) {
			resouces[name] = value;
		} else {
			resouces[name] += value;
		}
	}
	// print the output
	const result = Object.entries(resouces);
	result.forEach(([key, value]) => console.log(`${key} -> ${value}`));
}
collect(['Gold', '155', 'Silver', '10', 'Copper', '17']);
console.log('---');
collect(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);
