function storeEmp(arr) {
	// create collection
	let companies = {};
	// parse the input
	for (const line of arr) {
		// -- split by " -> " [company, id]
		const [company, id] = line.split(' -> ');
		// -- if the company already exists, push the new value to its collection
		if (!companies.hasOwnProperty(company)) {
			companies[company] = new Set();
		}
		companies[company].add(id);
	}
	// sort the output in ascending order
	const sorted = Object.entries(companies).sort((a, b) =>
		a[0].localeCompare(b[0])
	);
	// print the sorted output
	for (const [key, value] of sorted) {
		console.log(`${key}`);
		value.forEach(el => {
			console.log(`-- ${el}`);
		});
	}
}
storeEmp([
	'SoftUni -> AA12345',
	'SoftUni -> BB12345',
	'Microsoft -> CC12345',
	'HP -> BB12345',
]);
console.log('---');
storeEmp([
	'SoftUni -> AA12345',
	'SoftUni -> CC12344',
	'Lenovo -> XX23456',
	'SoftUni -> AA12345',
	'Movement -> DD11111',
]);
