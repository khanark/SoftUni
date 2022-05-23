function addressBook(arr) {
	const personAddress = {};

	for (const line of arr) {
		const [person, address] = line.split(':');
		personAddress[person] = address;
	}

	const sorted = Object.entries(personAddress);
	sorted.sort(([aKey, bKey], [aValue, bValue]) => {
		return aKey.localeCompare(bKey);
	});

	for (const [key, value] of sorted) {
		console.log(`${key} -> ${value}`);
	}
}
addressBook([
	'Tim:Doe Crossing',
	'Bill:Nelson Place',
	'Peter:Carlyle Ave',
	'Bill:Ornery Rd',
]);
