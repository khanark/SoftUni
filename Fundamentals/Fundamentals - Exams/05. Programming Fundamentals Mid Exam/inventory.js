function gatherItems(arr) {
  // create array of items
	const items = arr.shift().split(', ');

  // parse the input
	for (const line of arr) {
		if (line == 'Craft!') {
			break;
		}
		const [command, material] = line.split(' - ');

    // implement logic on different input commands
		switch (command) {
			case 'Collect':
				if (!items.includes(material)) {
					collect(material, items);
				}
				break;
			case 'Drop':
				if (items.includes(material)) {
					drop(material, items);
				}
				break;
			case 'Combine Items':
				const [oldItem, newItem] = material.split(':');
				if (items.includes(oldItem)) {
					combineItems(oldItem, newItem, items);
				}
				break;
			case 'Renew':
				renew(material, items);
		}
	}

  // create functions for different scenarios
	function collect(item, arr) {
		return arr.push(item);
	}

	function drop(item, arr) {
		return arr.splice(arr.indexOf(item), 1);
	}

	function combineItems(oldItem, newItem, arr) {
		return arr.splice(arr.indexOf(oldItem) + 1, 0, newItem);
	}

	function renew(item, arr) {
		const spliced = arr.splice(arr.indexOf(item), 1);
		return arr.push(spliced);
	}

  // print the output
	console.log(items.join(', '));
}
gatherItems([
	'Iron, Sword',
	'Drop - Bronze',
	'Combine Items - Sword:Bow',
	'Renew - Iron',
	'Craft!',
]);
