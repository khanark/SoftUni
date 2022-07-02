function saveTownInfo(arr) {
	let towns = {};

	for (const line of arr) {
		const [town, population] = line.split(' <-> ');

		if (!towns[town]) {
			towns[town] = { population: Number(population) };
		} else {
			towns[town].population += Number(population);
		}
	}

	for (const [town, obj] of Object.entries(towns)) {
		console.log(`${town} : ${obj.population}`);
	}
}
saveTownInfo([
	'Sofia <-> 1200000',
	'Sofia <-> 300',
	'Montana <-> 20000',
	'New York <-> 10000000',
	'Washington <-> 2345000',
	'Las Vegas <-> 1000000',
]);
