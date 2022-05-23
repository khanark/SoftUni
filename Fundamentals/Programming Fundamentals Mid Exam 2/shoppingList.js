function shoppingList(arr) {
	const currentList = arr.shift().split('!');

	for (const commands of arr) {
		const [command, item, newItem] = commands.split(' ');

		switch (command) {
			case 'Urgent':
				urgent(item);
				break;
			case 'Unnecessary':
				unnecessary(item);
				break;
			case 'Correct':
				correct(item, newItem);
				break;
			case 'Rearrange':
				rearrange(item);
				break;
			default:
				break;
		}
	}

	function urgent(el) {
		if (!currentList.includes(el)) {
			currentList.unshift(el);
		}
	}

	function unnecessary(el) {
		if (currentList.includes(el)) {
			currentList.splice(currentList.indexOf(el), 1);
		}
	}

	function rearrange(el) {
		if (currentList.includes(el)) {
			const spliced = currentList.splice(currentList.indexOf(el), 1);
			currentList.push(spliced);
		}
	}

	function correct(oldEl, newEl) {
		if (currentList.includes(oldEl)) {
			currentList.splice(currentList.indexOf(oldEl), 0, newEl);
			currentList.splice(currentList.indexOf(oldEl), 1);
		}
	}

	console.log(currentList.join(', '));
}
shoppingList([
	'Milk!Pepper!Salt!Water!Banana',
	'Urgent Salt',
	'Unnecessary Banana',
	'Correct Pepper Onion',
	'Rearrange Salt',
	'Correct Water Potatoes',
	'Go shopping!',
]);
