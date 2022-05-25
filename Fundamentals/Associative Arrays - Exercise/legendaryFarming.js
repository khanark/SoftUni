function farm(arr) {
	// collection with requirements
	const items = {
		Shadowmourne: { material: 'shards', quantity: 250 },
		Valanyr: { material: 'fragments', quantity: 250 },
		Dragonwrath: { material: 'motes', quantity: 250 },
	};
	// collection storing the input from the user
	const farm = new Map();
	// boolean
	let flag = false;
	// parse input
	const input = arr.split(' ');

	for (let pair = 0; pair < input.length; pair += 2) {
		const quantity = input[pair];
		const material = input[pair + 1].toLowerCase();

		if (!farm.has(material)) {
			farm.set(material, Number(quantity));
		} else {
			let oldQuantity = farm.get(material);
			const newQuantity = (oldQuantity += Number(quantity));
			farm.set(material, newQuantity);
		}

		for (const [farmMat, quantity] of farm) {
			const shadowmourne = items['Shadowmourne'];
			const valanyr = items['Valanyr'];
			const dragonwrath = items['Dragonwrath'];
			if (
				shadowmourne.material === farmMat &&
				shadowmourne.quantity <= quantity
			) {
				console.log('Shadowmourne obtained!');
				flag = true;
			} else if (valanyr.material === farmMat && valanyr.quantity <= quantity) {
				valanyr.quantity -= quantity;
				console.log('Valanyr obtained!');
				flag = true;
			} else if (
				dragonwrath.material === farmMat &&
				dragonwrath.quantity <= quantity
			) {
				console.log('Dragonwrath obtained!');
				flag = true;
			}
			if (flag === true) {
				let currQuantity = farm.get(farmMat);
				let result = (currQuantity -= 250);
				farm.set(farmMat, result);
				break;
			}
		}
		if (flag === true) break;
	}
	// print the output
	let keyMaterial = {
    "fragments" : 0,
    "motes": 0,
    "shards": 0
  };
	let junkMaterial = new Map();
	for (const [material, quantity] of farm) {
		if (
			material === 'fragments' ||
			material === 'motes' ||
			material === 'shards'
		) {
			keyMaterial[material] = quantity;
		} else {
			junkMaterial.set(material, quantity);
		}
	}
	const sortedKeyMats = Object.entries(keyMaterial).sort((a,b) => {
    return b[1] - a[1] == 0  ? a[0].localeCompare(b[0]) : b[1] - a[1]
  })
	const sortedJunkMats = Array.from(junkMaterial).sort((a,b) => a[0].localeCompare(b[0]))
  
  for (const [key, value] of sortedKeyMats){
    console.log(`${key}: ${value}`);
  }
  for (const [key, value] of sortedJunkMats){
    console.log(`${key}: ${value}`);
  }
}
farm('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
