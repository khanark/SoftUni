function makeDictionary(jsonStrings) {
	let terms = [];
	let flag = false;

	for (let index = 0; index < jsonStrings.length; index++) {
		const term = {};
		const str = jsonStrings[index];
		const parsed = JSON.parse(str);

		const key = Object.keys(parsed);
		const value = Object.values(parsed);

		for (const obj of terms) {
			if (obj.Term === key[0]) {
				obj.Definition = value[0];
				flag = true;
			}
		}
		if (!flag) {
			term.Term = key[0];
			term.Definition = value[0];
			terms.push(term);
		}
		flag = false;
	}

	terms.sort((a, b) => a.Term.localeCompare(b.Term));

	for (const obj of terms) {
		console.log(`Term: ${obj.Term} => Definition: ${obj.Definition}`);
	}
}

makeDictionary([
	'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
	'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
	'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
	'{"Boiler":"A narrow strip of material, typically used to hold or fasten something."}',
	'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
