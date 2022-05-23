function storeInformationAboutPerson(arr) {
	const person = {};
	for (const token of arr) {
		const [personName, personNumber] = token.split(' ');
			person[personName] = (personNumber);
	}
	for (currentPerson in person) {
		console.log(`${[currentPerson]} -> ${person[currentPerson]}`);
	}
}
storeInformationAboutPerson([
	'Tim 0834212554',
	'Peter 0877547887',
	'Bill 0896543112',
	'Tim 0876566344',
]);
